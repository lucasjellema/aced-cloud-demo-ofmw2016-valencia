/*
 * Copyright (c) 2015, Oracle and/or its affiliates. All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.  Oracle designates this
 * particular file as subject to the "Classpath" exception as provided
 * by Oracle in the LICENSE file that accompanied this code.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Oracle, 500 Oracle Parkway, Redwood Shores, CA 94065 USA
 * or visit www.oracle.com if you need additional information or have any
 * questions.
 */
package de.oc.iot;

import oracle.iot.client.DeviceModel;
import oracle.iot.client.device.DirectlyConnectedDevice;
import oracle.iot.client.device.VirtualDevice;

import java.io.*;
import java.security.GeneralSecurityException;
import java.util.Properties;

public class IoTConnector {

    private final static String TRUSTED_ASSETS_STORE = "trusted.assets.file.name";
    private final static String TRUSTED_ASSETS_STORE_PASS = "trusted.assets.file.pass";
    private final static String TWITTER_MODEL_URN = "urn:opitz:iot:twittercollector";
    public final static String FIELD_ARTIST_NAME = "artistName";
    private Properties configuration;

    private DirectlyConnectedDevice device;
    private VirtualDevice virtualDevice;

    public void send(String hashtag) {
        System.out.println("Send to IoT Cloud: " + hashtag);
        virtualDevice.set(FIELD_ARTIST_NAME, hashtag);
    }

    /**
     * Get a configuration property.
     * @return the property value.
     */
    public String getProperty(String property) {
        return configuration.getProperty(property);
    }

    /**
     * Log a message.
     */
    public static void log(String s) {
        System.out.println(s);
    }

    /**
     * Validate configuration properties.
     * @param configurationFile path to a Properties file.
     * @return true if the configuration file exists, is readable and
     * all properties are valid, else false.
     */
    public boolean configure(String configurationFile) {
        configuration = new Properties();
        InputStream is = null;
        try {
            File file = new File(configurationFile);
            if (!file.exists()) {
                log("Configuration file " + file.getPath() +
                        " does not exist");
                return false;
            } else if (!file.canRead()) {
                log("Cannot read:" + file.getPath());
                return false;
            }
            is = new FileInputStream(file);
            configuration.load(is);
        } catch (IOException ioe) {
            System.err.println(ioe.toString());
            return false;
        } finally {
            if (is != null) {
                try {
                    is.close();
                } catch (IOException e) {
                } finally {
                    is = null;
                }
            }
        }

        final String trustedAssertsStore = configuration.getProperty(TRUSTED_ASSETS_STORE);
        final String pass = configuration.getProperty(TRUSTED_ASSETS_STORE_PASS);
        if(trustedAssertsStore != null && pass != null){
            log("setting trusted asserts store and password...");
            System.setProperty("oracle.iot.client.trustedAssetsStore", trustedAssertsStore);
            System.setProperty("oracle.iot.client.trustedAssetsStorePassword", pass);
        }
        return true;
    }

    public void connect() throws GeneralSecurityException, IOException {
        // Create the device client instance
        System.out.println("\nCreating the device instance...");
        device = new DirectlyConnectedDevice();

        // Activate the device
        if (!device.isActivated()) {
            device.activate(TWITTER_MODEL_URN);
        }

        // Create a virtual device implementing the device model
        DeviceModel deviceModel =
                device.getDeviceModel(TWITTER_MODEL_URN);

        virtualDevice = device.createVirtualDevice(device.getEndpointId(), deviceModel);
    }
}

