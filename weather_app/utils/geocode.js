const request = require("request");
const geocode =(address,callback)=>{
    const weatherURL='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibWVyYzRydnJ0IiwiYSI6ImNsamNmZmJyNTEyNzEzY3BlaWZ2aXJlcDkifQ.sFZgsIPBSnfxq0TPzC6GwQ'
    console.log(weatherURL);
    request({url:weatherURL,json:true},(error,response)=>{
        if (error){
            callback('Unable to connect to location services',undefined)
        }else if (response.body.features.length===0){
            callback('Unable to find location. Try another search!',undefined)
        }else{
            callback(undefined,{
                latitude :response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                location:response.body.features[0].place_name
            })
        }
    })
}

module.exports=geocode