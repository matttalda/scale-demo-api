const Hapi = require('@hapi/hapi');
const router = require('./router');

const init = async() => {

    const server = new Hapi.Server({
        port: process.env.Port || 8080,
        host: process.env.IP || '0.0.0.0',
        routes: {
            cors: {
                origin: ['*'],
                credentials: true
            },
        }
    });

    router.init(server);

    await server.start();
    console.log('Server running at: ' + server.info.uri);
}

init();
