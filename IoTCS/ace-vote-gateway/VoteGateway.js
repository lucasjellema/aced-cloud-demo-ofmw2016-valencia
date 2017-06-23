/**
 * Copyright (c) 2016, 2017, AMIS Services. All rights reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version. See the LICENSE file in the root
 * directory for license terms.
 *
 */

/*
 * This gateway sends artistname data to the IoT Cloud when a beacon is registered.
 */

var verbose = true;
var WINDOW_SIZE = 100;
var SEND_INTERVAL = 20;

var gatewayNum = (process.argv[2] != undefined) ? process.argv[2] : "";
var votingBeaconModelUrn = 'urn:nl:amis:iot:device:voting:beacon';
var votingBeaconModel;
var registrationCount = 0;

var Sticker = require('bleacon').EstimoteSticker;
var dcl = require("./modules/device-library.node.js");
dcl = dcl({
		debug : verbose
	});
dcl.oracle.iot.tam.store = "iot-gateway-code" + gatewayNum + ".conf"; //process.argv[3]; // device store file
dcl.oracle.iot.tam.storePassword = "Welcome01"; //process.argv[4]; // password of store file

var artists = [];
artists[1] = [];
artists[1]["d0d3fa86ca7645ec9bd96af4d3ff231d:23743:35171"] = "U2";
artists[1]["d0d3fa86ca7645ec9bd96af48eb23fac:2396:3312"] = "Metallica";

artists[2] = [];
artists[2]["d0d3fa86ca7645ec9bd96af4d3ff231d:23743:35171"] = "Maroon 5";
artists[2]["d0d3fa86ca7645ec9bd96af48eb23fac:2396:3312"] = "Coldplay";

function discover(device) {
	var beacons = [];
	var virtualBeacons = [];
	var lastSent = [];

	Sticker.startScanning();
	Sticker.on('discover', function (sticker) {
		var beaconId = sticker.uuid.concat(':', sticker.major, ':', sticker.minor);
		var artist = artists[gatewayNum][beaconId];

		if (beacons[beaconId] === undefined) {
			// Indicate that we are in the process of registering this id
			beacons[beaconId] = -1;

			// Create metadata object
			var metadata = new Object();
			metadata[dcl.device.GatewayDevice.DeviceMetadata.MANUFACTURER] = 'AMIS';
			metadata[dcl.device.GatewayDevice.DeviceMetadata.DEVICE_CLASS] = 'LE';
			metadata[dcl.device.GatewayDevice.DeviceMetadata.PROTOCOL] = 'Bluetooth-LE';
			metadata[dcl.device.GatewayDevice.DeviceMetadata.PROTOCOL_DEVICE_CLASS] = 'VotingBeacon';
			metadata[dcl.device.GatewayDevice.DeviceMetadata.MODEL_NUMBER] = 'EST_NEAR';
			metadata[dcl.device.GatewayDevice.DeviceMetadata.SERIAL_NUMBER] = sticker.id;

			device.registerDevice(beaconId, metadata, [votingBeaconModelUrn], function (id, error) {
				if (id) {
					console.log('\n-----------------------------DEVICE ENDPOINT------------------------------');
					console.log('HardwareID: ' + beaconId + ', DeviceID: ' + id);
					console.log('--------------------------------------------------------------------------\n');
					beacons[beaconId] = id;
					virtualBeacons[beaconId] = device.createVirtualDevice(id, votingBeaconModel);
					var sensor = {
						artistname : artist
					};
					virtualBeacons[beaconId].update(sensor);
					console.log("Vote is cast for " + sensor.artistname);
					lastSent[beaconId] = 0;
					registrationCount += 1;
				} else {
					beacons[beaconId] = undefined;
					console.log('registerDevice() Error: ' + error);
				}
			});
		} else {
			if (virtualBeacons[beaconId] !== undefined) {
				if (++lastSent[beaconId] == SEND_INTERVAL) {
					var sensor = {
						artistname : artist
					};
					virtualBeacons[beaconId].update(sensor);
					console.log("Vote is cast for " + sensor.artistname);
					lastSent[beaconId] = 0;
				} else {
					if (verbose) {
						console.log("Your vote ("+beaconId+") is already cast");
					}
				}
			}
		}
	});
}

function getBeaconModel(device) {
	device.getDeviceModel(votingBeaconModelUrn, function (response, error) {
		if (response !== null) {
			if (verbose) {
				console.log('\n------------------------------DEVICE MODEL--------------------------------');
				console.log(JSON.stringify(response, null, 4));
				console.log('--------------------------------------------------------------------------\n');
			}
			votingBeaconModel = response;
		} else {
			console.log('getDeviceModel() Error: ' + error);
		}
	});

	if (votingBeaconModel !== null) {
		discover(device);
	}
}

var gateway = new dcl.device.GatewayDevice();
if (!gateway.isActivated()) {
	gateway.activate(['urn:oracle:iot:device:default'], function (device) {
		gateway = device;
		console.log('Gateway is ACTIVATED.');
		if (gateway.isActivated()) {
			getBeaconModel(gateway);
		}
	});
} else {
	console.log('Gateway is ACTIVE');
	getBeaconModel(gateway);
}
