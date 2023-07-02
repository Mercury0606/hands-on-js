const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');




geocode('lvshunkou',(error,gData)=>{
    // console.log('Error: ',error);
    // console.log('Data: ',data);
    forecast(gData.latitude,gData.longitude,(error,data)=>{
        console.log(data);
    })
})








// const url='http://api.weatherstack.com/current?access_key=a82b885dc5ebfe71ba4dc68c84fc0365&query=dalian'//unit=f
// // request({url:url,json:true},(error,response)=>{
// //    const data = response.body;
// //    const current = data.current;
// //
// //     if (error){
// //         console.log("Unable to connect to weather server");
// //         console.log(error.code, error.error);
// //     }
// //     else if (response.body.error){
// //         console.log("Unable to find location");
// //     }
// //     else {
// //         console.log(current.weather_descriptions[0]+" It is currently " + current.temperature + " degree out. there is a "+current.precip+"% chance of rain");
// //
// //     }
// // })
//
//
// //Geocoding
// // weatherURL='https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Francisco.json?access_token=pk.eyJ1IjoibWVyYzRydnJ0IiwiYSI6ImNsamNmZmJyNTEyNzEzY3BlaWZ2aXJlcDkifQ.sFZgsIPBSnfxq0TPzC6GwQ'
// request({url:weatherURL},(err,response)=>{
//         if (error){
//         console.log("Unable to connect to weather server");
//         console.log(error.code, error.error);
//     }
//     else if (response.body.error){
//         console.log("Unable to find location");
//     }
//     else {
//         console.log(current.weather_descriptions[0]+" It is currently " + current.temperature + " degree out. there is a "+current.precip+"% chance of rain");
//
//     }
//      const latitude =response.body.features[0].center[1]
//      const longitude = response.body.features[0].center[0]
//     console.log(latitude, longitude);
// })





