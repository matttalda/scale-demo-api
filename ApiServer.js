const Hapi = require('@hapi/hapi');
const router = require('./router');

const init = async() => {

    const server = new Hapi.Server({
        port: process.env.Port,
        host: process.env.IP
    });

    router.init(server);

    await server.start();
    console.log('Server running at: ' + server.info.uri);
}

init();
