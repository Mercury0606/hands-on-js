const request= require('request')
const url='http://api.weatherstack.com/current?access_key=a82b885dc5ebfe71ba4dc68c84fc0365&query=Dalian&units=f'
request({url:url,json:true},(error,response)=>{
   const data = response.body;
   const current = data.current;
  //   console.log(data);
  // console.log(data.current);
    console.log(current.weather_descriptions[0]+" It is currently " + current.temperature + " degree out. there is a "+current.precip+"% chance of rain");
})
//Geocoding
weatherURL='https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Francisco.json?access_token=pk.eyJ1IjoibWVyYzRydnJ0IiwiYSI6ImNsamNmZmJyNTEyNzEzY3BlaWZ2aXJlcDkifQ.sFZgsIPBSnfxq0TPzC6GwQ'
