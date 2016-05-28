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

import oracle.iot.client.ClientException;
import oracle.iot.client.device.Resource;
import oracle.iot.client.device.async.AsyncDeviceClient;
import oracle.iot.client.device.async.MessageReceipt;
import oracle.iot.message.*;

import java.io.*;
import java.util.Arrays;
import java.util.Properties;

/*public class IoTConnector {
    TCProperties prop;
    private String deviceId;
    private String connectionUrl;

    public IoTConnector(TCProperties prop) {
        this.prop = prop;
        deviceId = prop.iotDeviceId();
        connectionUrl = prop.iotConnectionUrl();
    }

    public IoTConnector register() {
        System.out.println(String.format("Register device %s at %s", deviceId, connectionUrl));
        // TODO: Implement registration of device in IoT Cloud
        return this;
    }

    public void send(String hashtag) {
        System.out.println("Send to IoT Cloud: " + hashtag);
        // TODO: Send hashtag in required format to IoT Cloud
    }

}*/

public class IoTConnector {

    public final static String ENDPOINT_ID = "device.endpoint.id";
    public final static String SHARED_SECRET = "device.endpoint.secret";
    public final static String SERVER_HOST = "server.host";
    public final static String SERVER_PORT = "server.port";
    public final static String SERVER_CN = "server.cn";
    public final static String KEYSTORE = "keystore.file.name";
    public final static String KEYSTORE_PASS = "keystore.file.pass";
    private final static String DATA_TWITTER_HASHTAG = "urn:opitz:iot:twittercollector:data:hashtag";
    public final static String FIELD_HASHTAG = "hashtag";
    private Properties configuration;

    private static AsyncDeviceClient deviceClient;


    public void send(String hashtag) {
        System.out.println("Send to IoT Cloud: " + hashtag);
        DataMessage.Builder builder = new DataMessage.Builder();
        builder.format(DATA_TWITTER_HASHTAG)
                .source(configuration.getProperty(ENDPOINT_ID))
                .dataItem(FIELD_HASHTAG, hashtag)
                .reliability(Message.Reliability.BEST_EFFORT)
                .priority(Message.Priority.MEDIUM);
        sendMessage(builder.build());
    }

    /**
     * Get a configuration property.
     * @return the property value.
     */
    public String getProperty(String property) {
        return configuration.getProperty(property);
    }

    /**
     * a wrapper method that sends a message to the server
     * @param message
     * @return
     */
    public MessageReceipt sendMessage(Message message){

        return deviceClient.sendMessage(message);
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

        final String endpointId = configuration.getProperty(ENDPOINT_ID);
        if (endpointId == null || endpointId.isEmpty()) {
            log("device.endpoint.id not specified in config.properties");
            return false;
        }

        final String sharedSecret = configuration.getProperty(SHARED_SECRET);
        if (sharedSecret == null || sharedSecret.isEmpty()) {
            log("device.endpoint.secret not specified in config.properties");
            return false;
        }

        final String serverHost = configuration.getProperty(SERVER_HOST);
        if (serverHost == null || serverHost.isEmpty()) {
            log("server.host not specified in config.properties");
            return false;
        }

        final String serverPort = configuration.getProperty(SERVER_PORT);
        int port = -1;
        if (serverHost != null &&  !serverHost.isEmpty()) {
            try {
                port = Integer.parseInt(serverPort);
            } catch (NumberFormatException e) {
                log("parsing server.port threw: " + e.toString());
                return false;
            }
        }
        if (port != -1 && (port <= 0 || 65535 < port)) {
            log("server.port not valid: " +
                    port);
            return false;
        }

        final String serverCN = configuration.getProperty(SERVER_CN);
        if (serverCN == null || serverCN.isEmpty()) {
            log("server.cn not specified in config.properties");
            return false;
        }

        final String truststore = configuration.getProperty(KEYSTORE);
        final String pass = configuration.getProperty(KEYSTORE_PASS);
        if(truststore != null && pass != null){
            log("setting truststore and password...");
            System.setProperty("javax.net.ssl.trustStore", truststore);
            System.setProperty("javax.net.ssl.trustStorePassword", pass);
        }

        // Must be set before any cloud server requests are made.
        // See Client.java.
        System.setProperty("com.oracle.iot.client.server.cn", serverCN);
        return true;
    }

    public void connect() throws ClientException {
        // Create the device client instance
        System.out.println("\nCreating the device instance...");
        deviceClient =
                new AsyncDeviceClient(getProperty(SERVER_HOST),
                        Integer.parseInt(getProperty(SERVER_PORT)), getProperty(ENDPOINT_ID));

        byte[] privateKey = getPrivateKey();

        // The existence of the stored private key indicates
        // that the device has been activated.
        boolean activated = privateKey != null;

        if (!activated) {
            // If the device has not been activated, connect to the server
            // using client-credentials and activate the client to
            // obtain the private key. The private key is then persisted.
            System.out.println("\nConnecting with client-credentials...");
            try {
                System.out.println("\nActivating...");
                // activate will not return null, but will throw an
                // AlreadyActivatedException if the client is not connected
                // or the device is already activated.
                privateKey = deviceClient.activate(getProperty(SHARED_SECRET));

                System.out.println("\nSaving private key...");
                savePrivateKey(privateKey);
            } catch (IllegalStateException aae) {
                log("The device has already been activated, but there is no private key");
                log("Enroll a new device and try again.");
                System.exit(-1);
            }
        } else {
            // Authenticate with, and connect to, the server
            System.out.println("\nConnecting with client-assertion...");
            deviceClient.authenticate(privateKey);
        }

    }


    /**
     * Obtain the private key. If the device has been activated the
     * private key will exist.
     * @return true if the device has its private key, else false.
     */
    private byte[] getPrivateKey() {
        InputStream is = null;
        try {
            System.out.println("\nLoading private key...");
            File file = new File(System.getProperty("user.dir"), "/" +
                    configuration.getProperty(ENDPOINT_ID) + ".bin");
            if (file.exists()) {
                is = new FileInputStream(file);
                byte[] buf = new byte[1024];
                int count = 0;
                int c = -1;
                while ((c = is.read()) != -1) {
                    buf[count++] = (byte)c;
                    if (count == buf.length) {
                        buf = Arrays.copyOf(buf, buf.length + 256);
                    }
                }
                System.out.println("\nPrivate key loaded...");
                return Arrays.copyOf(buf, count);
            } else {
                System.out.println("\nPrivate key file does not exist...");
            }
        } catch (IOException ioe) {
            System.err.println(ioe.getMessage());
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
        return null;
    }

    /**
     * Save the private key to persistent storage
     */
    private void savePrivateKey(byte[] privateKey) {
        OutputStream os = null;
        try {
            File file = new File(System.getProperty("user.dir"), "/" +
                    configuration.getProperty(ENDPOINT_ID) + ".bin");
            if (!file.exists()) {
                file.createNewFile();
                os = new FileOutputStream(file);
                os.write(privateKey);
            }
        } catch (IOException e) {
            log("could not save private key data: " + e.toString());
        } finally {
            if (os != null) {
                try {
                    os.close();
                } catch (IOException ioe) {
                }
            }
        }

    }

    public boolean registerRequestHandler(Resource resource, RequestMessageHandler handler){
        return deviceClient.registerRequestHandler(resource, handler);
    }


    private static class MessageHandler implements RequestMessageHandler {

        private final IoTConnector IoTConnector;
        private MessageHandler(IoTConnector iotConnector) {
            this.IoTConnector = iotConnector;
        }


        public HttpResponseMessage handleRequest(HttpRequestMessage request) throws Exception {

            final HttpResponseMessage.Builder builder = new HttpResponseMessage.Builder()
                    .source(request.getDestination())
                    .destination(request.getSource())
                    .requestId(request.getId());

            final String method = request.getMethod().toUpperCase();
            //if ("GET".equals(method)) {
            //   builder.statusCode(StatusCode.OK)
            //          .body("{\"heartbeat\" : " + 1 + "}");
            //} else {
            //    builder.statusCode(StatusCode.METHOD_NOT_ALLOWED);
            // }

            /*HttpResponseMessage responseMessage  = builder.build();
            log("HTTP " + method + " " + TEMPERATURE_RESOURCE
                    + " returns " + responseMessage.getStatusCode());
*/
            return null;
        }
    }
}

