const request = require("request");
const forecast =(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=a82b885dc5ebfe71ba4dc68c84fc0365&query='+latitude+','+longitude
    console.log(url);
    request({url,json:true},(error, {body})=>{
        const location=body.location
        const current=body.current
        if (error){
            callback('Unable to connect to location services',undefined)
        }else if (body.success==='false'){
            callback('Unable to find location. Try another search!',undefined)
        }else{
            // callback(undefined,'the weather in '+body.location.name+' is '+body.current.weather_descriptions)
        console.log(location.name+' now is '+current.weather_descriptions[0]+". It is currently " + current.temperature + " degree out. there is a "+current.precip+"% chance of rain");

        }
    })
}

module.exports=forecast