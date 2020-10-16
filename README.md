# Demo API
This is the mock api from [Scale UI](https://github.com/ngageoint/scale-ui) with minor alterations in order to work with Azure App Services.

## Azure Setup
Create an Azure node.js App Service and once created go the Development Center. Select either Local Git or Github and follow the steps to upload the repository. From there in Configurations, add the key-pair `WEBSITES_PORT: 8080` to the Application Settings. Make sure **Web Sockets** are on as well in Genereal Settings.  