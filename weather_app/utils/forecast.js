const request = require('request')

const forecast = (latitude , longitude , callback) => {
    const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/'+latitude+','+longitude

    request({url: url , json : true } , (error , response) => {
        if(error){
            callback('unable to connect with the loacation services' , undefined)
        }else if(response.body.error){
            callback('Unable to find location' , undefined)
        }else{
            callback(undefined,response.body.daily.data[0].summart + "It is currently " + response.body.currently.temprature + " degrees out. There is " + response.body.currently.percipProbablity*100 + "% chance of rain.")
        }
    })

}

module.exports = forecast