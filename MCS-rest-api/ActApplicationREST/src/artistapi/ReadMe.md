# Overview

The scaffolding for your API implementation includes 7 files

1. package.json: This is a standard package.json file.
  The name, version and main sections are mandatory.
  You can also include an oracleMobile section that allows you to provide defaults used in your API execution.
  An empty example of that section is provided.  The 'apis' and 'connectors' sections hold a list of dependencies where:
  	key = uri of connector or api
  	value = default version 

2. Your main javascript file.
  This provides the main body of the scaffold.
  The functions included in the javascript file define where we are expecting API implementation code to appear.

3. toolsConfig.json. toolsConfig.json is used by the MCS command-line development tools packaged with the MCS SDK.
   The development tools include a container in which you can run and debug your APIs locally, a testing tool to submit requests
   to your API implementation and a deployment tool to package your implementation
   and deploy it to MCS. Download the SDK for more information.

In addition, the following supporting files are included:
* RAML definition of your API
* Swagger definition of your API
* ReadMe.md (this file)
* samples.txt containing code samples.

API implementations are packaged as npm modules. If you want to run your implementation locally:
* download and install the MCS command-line tools included in the SDK
* run "npm install" on your module
* start your API using the offline custom code container

To deploy your implementation to MCS:
* use the deployment tool included in the SDK
* manually zip the custom code so that is resembles the scaffold file (the base directory appears at the base of the zip file)
  and upload the zip via the API Implementations page in the MCS UI.

