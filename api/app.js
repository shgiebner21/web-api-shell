const express = require('express')
const app = express()
const port = process.env.PORT || 5984
const bodyParser = require('body-parser')
const HTTPError = require('node-http-error')
const cors = require('cors')
const request = require('request')
const couch = process.env.COUCHDB

const { dbLogin } = require('./dal.js')

app.use(cors({
  credentials: true
}))
app.use(bodyParser.json())


/////////////////////////////////////////////
//   login function
/////////////////////////////////////////////
app.use('/api/aws', function(req, res) {
  req.pipe(
    dbLogin(couch + '/_session', function(e,r,b) {
      console.log('app.use, api/aws has fired')

      if (r.statusCode !== 200) {
        return res.send(401)
      }
      // process.env.AMAZON_KEY
      // process.env.AMAZON_SECRET
      res.send({ key: 'foo', secret: 'bar'})
    })
  )
})


// app.post('/family', function(req, resp, next) {
//   postFamily(req.body, function(err, dalResp) {
//     if (err) return next(new HTTPError(err.status, err.message, err))
//     resp.status(201).send(dalResp)
//   })
// })
//
//
//
//
// app.use('/api/aws', function(req, res) {
//   req.pipe(
//     request(couch + '/_session', function(e,r,b) {
//
//       if (r.statusCode !== 200) {
//         return res.send(401);
//       }
//       // process.env.AMAZON_KEY
//       // process.env.AMAZON_SECRET
//       res.send({ key: 'foo', secret: 'bar'});
//     })
//   );
// });







/////////////////////////////////////////////
//   helper functions
/////////////////////////////////////////////
app.use(function(err, req, resp, next) {
  console.log(req.method, ' ', req.path, 'error: ', err)
  resp.status(err.status || 500)
  resp.send(err)
})

app.listen(port, function() {
  console.log('\x1b[32m' ,'admin listening on port ' + port, '\x1b[0m')
})
