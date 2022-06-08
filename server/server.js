const { join } = require('path');
const fastify = require('fastify')({ logger: true });
const webpack = require('webpack');
const config = require('../webpack.config');
const { fastifyWebpackHot } = require('fastify-webpack-hot');
const fastifyStatic = require('@fastify/static');
const getAssets = require('./getAssets');

const compiler = webpack(config);

const port = process.env.PORT || 3000;

fastify.register(fastifyStatic, {
  root: join(__dirname, '../src/img'),
  prefix: '/img',
});
fastify.register(fastifyWebpackHot, { compiler });

fastify.register(require('point-of-view'), {
  engine: {
    ejs: require('ejs'),
  },
});

fastify.get('/', (request, reply) => {
  return reply.view('/src/templates/index.ejs', {
    ...getAssets(request),
  });
});

fastify.get('/promotions', (request, reply) => {
  return reply.view('/src/templates/promotions.ejs', {
    ...getAssets(request),
  });
});

fastify.listen(port, () => {
  console.log(`Server was running on ${port} port`);
});
