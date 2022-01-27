const fastify = require("fastify")({
  logger: true
});
fastify.register(require('fastify-cors'), { 
  origin: "*",
    methods: ["POST","GET","PUT","DELETE"]
})

// bring in routes
const routes = require("./routes");

// db
const mongoose = require("mongoose");

// bypass firewall settings with ngrok
console.log(process.env.MONGOURL)
// db connection
mongoose
  .connect(`mongodb+srv://`+process.env.MONGONAME+`:`+process.env.MONGOPASS+`@cluster0.u9hug.mongodb.net/reviews?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("mongoose has connected..."))
  .catch(err => console.log(err));

// routes
fastify.get("/", async (request, reply) => {
  return { online: "Review API storage is currently online!" };
});

routes.forEach((route, index) => {
  fastify.route(route);
});

// starting server
const start = async () => {
  try {
    await fastify.listen(process.env.PORT);
    fastify.log.info(`Server is running at ${address}`);
  } catch (error) {}
};

start();
