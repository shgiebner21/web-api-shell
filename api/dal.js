const PouchDB = require('pouchdb-http')
PouchDB.plugin(require('pouchdb-mapreduce'))
const Cloudant = require('cloudant')
// const myURL = process.env.COUCHDB
// const cloudant = Cloudant({ url: myURL })

const { map } = require('ramda')


/////////////////////////////////////////////
//   login function
/////////////////////////////////////////////
function dbLogin(user, cb) {
  const Authorization = 'Basic ' + btoa([user.name, user.password].join(':'))
  db.insert('/api/_session', user)

  if (err) return cb(err)
  cb(null, resp)
}






// function postFamily(family, cb) {
//   family.type = 'family'
//   let newId = 'family_' + family.parentLast.toLowerCase()
//   + '_' + family.eMail.toLowerCase() + '_' + family.cellPhone
//   family._id = newId
//
//   db.insert(family, function(err, resp) {
//     if (err) return cb(err)
//     cb(null, resp)
//   })
// }
//
  // $scope.login = function(user) {
  //   $http.defaults.headers.common.Authorization = 'Basic ' +
  //     btoa([user.name, user.password].join(':'))
  //   $http.post('/api/_session', user)
  //     .then(function(res) {
  //       // get upload keys
  //       return $http.get('/api/aws')
  //     })
  //     .then(function(res) {
  //       $rootScope.user = user
  //       $window.sessionStorage.setItem('user', JSON.stringify(user))
  //       $window.sessionStorage.setItem('aws', JSON.stringify(res.data))
  //       $state.go('home')
  //     }, function(err) {
  //       alert('UnAuthorized!')
  //     })
  //}






const dal = {
  dbLogin: dbLogin
}

module.exports = dal
