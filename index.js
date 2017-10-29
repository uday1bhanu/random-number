const http = require('http')
const port = 3000

Rand = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const requestHandler = (request, response) => {
  console.log(request.url)
  var msg = 'Hello '+Rand(10000, Math.random());
  response.end(msg)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
