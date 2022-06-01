const { join } = require('path');
const fastify = require('fastify')({ logger: true });
const webpack = require('webpack');
const config = require('./webpack.config');
const { fastifyWebpackHot } = require('fastify-webpack-hot');

const compiler = webpack(config);

const port = process.env.PORT || 3000;

fastify.register(require('@fastify/static'), {
  root: join(__dirname, 'build'),
});
fastify.register(fastifyWebpackHot, { compiler });

fastify.register(require('point-of-view'), {
  engine: {
    ejs: require('ejs'),
  },
});

fastify.get('/', (request, reply) => {
  const stats = request.webpack.stats.toJson({
    all: false,
    entrypoints: true,
  });

  console.log(request.webpack, stats);

  return reply.view(
    '/src/templates/index.ejs',
    {},
    { layout: './src/index.html' }
  );
});

fastify.listen(port, () => {
  console.log(`Server was running on ${port} port`);
});
