const Hapi = require('@hapi/hapi');
const router = require('./router');
const env = process.env;

const init = async() => {

    const server = new Hapi.Server({
        port: env.Port || 8080,
        host: env.IP || 'localhost'
    });

    router.init(server);

    await server.start();
    console.log('Server running at: ' + server.info.uri);
}

init();
