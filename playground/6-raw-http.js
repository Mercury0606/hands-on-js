 const https = require('http')
 const http = require("http");
 const url='http://api.weatherstack.com/current?access_key=a82b885dc5ebfe71ba4dc68c84fc0365&query=dalian'

const request=http.request(url,(response)=>{
  let data=''

  response.on('data',(chunk)=>{
   data=data+chunk.toString()
  })
      response.on('end',()=>{
       console.log(JSON.parse(data));
      })
 })
 request.on('error',(error)=>{
  console.log("An error ",error);
 })
 request.end()