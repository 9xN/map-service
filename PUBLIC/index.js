const fs = require('fs');
const fastify = require("fastify")({
    logger: false
  });
  fastify.register(require('fastify-cors'), { 
    origin: "*",
      methods: ["POST","GET","PUT","DELETE"]
  })

  fastify.get('/:page', async (request, reply) => {
      try {
    let page = request.params.page;
    reply.header('Content-Type', 'text/html')
    reply.type('text/html')
    if (!page){
        reply.code(200)
        reply.send(fs.readFileSync(`./HTML/index.html`, 'utf8'))
    } else {
    reply.code(200)
    reply.send(fs.readFileSync(`./HTML/${page}.html`, 'utf8'))
    }
} catch(err){
    //console.log(err)
    reply.header('Content-Type', 'text/html')
    reply.type('text/html')
    reply.code(404)
    reply.send(fs.readFileSync(`./HTML/404.html`, 'utf8'))

    }
  });
  // starting server
const start = async () => {
    try {
      await fastify.listen(8080);
      fastify.log.info(`Server is running at ${fastify.server.address().port}`);
    } catch (error) {}
  };
  
  start();
  