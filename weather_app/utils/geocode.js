const request = require('request')

const geocode = (address , callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponet(address) +'.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'
    request({ url : url , json : true} , (error , response) =>{
        if(error){
            callback('Unable to connect to location services!' , undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to location. Try another search' , undefined)
        }else{
            callback(undefined , {
                latitude : response.body.features[0].centre[1],
                longitude : response.body.features[0].centre[0],
                location : response.body.featires[0].place_name
            })
        }
    })
}

module.exports = geocode