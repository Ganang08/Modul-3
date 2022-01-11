// // // create connection for Harper DB
// const harperive = require("harperive");
// // const configuration = {
// //   username: process.env.ganang,
// //   password: process.env.m@rnawie08,
// //   schema: process.env.classroom,
// //   harperHost: process.env.marnawie-08-ganang.harperdbcloud.com,
// // };
//  harperive.Client(configuration);
// module.exports = d// const db = newb;

// var request = require('request');
// var options = {
//   'method': 'POST',
//   'url': 'https://marnawie-08-ganang.harperdbcloud.com',
//   'headers': {
//     'Content-Type': 'application/json',
//     'Authorization': 'Basic Z2FuYW5nOm1Acm5hd2llMDg='
//   },
//   body: JSON.stringify({
//     "operation": "describe_all"
// })

// };
// request(options, function (error, response) { 
//   if (error) throw new Error(error);
//   console.log(response.body);
// });

var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://marnawie-08-ganang.harperdbcloud.com',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Basic Z2FuYW5nOm1Acm5hd2llMDg='
  },
  body: JSON.stringify({
    "operation": "create_schema",
    "schema": "dev"
})

};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});