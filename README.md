# Demo API
This is the mock api from [Scale UI](https://github.com/ngageoint/scale-ui) with minor alterations in order to work with Azure App Services and the Static Demo Site.

## Local Setup
First make sure **npm** is installed on your machine. Then to test the mock api locally simply run the command:

```
npm install && npm start
```

## Azure Setup
Create an Azure node.js Web App and once the resource is created go to Configurations. From there, add the key-pair `WEBSITES_PORT: 8080` to the Application Settings and enable **Web Scockets** in General Settings. Next go to the Deployment Center. Select Github or Local Git depending on how you would like to deploy this repo. Go through the steps to deploy and wait for the upload and build to finish. Once complete, the API should be up and running. A complete example can be seen [here](https://scale-7-demo-api.azurewebsites.net/mocks/v6/version/).