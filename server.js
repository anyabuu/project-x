const express = require('express')

const server = express();
const port = process.env.PORT || 3000;

server.use(express.static('src'))

server.listen(port, () => {
  console.log(`Server was running on ${port} port`);
});
