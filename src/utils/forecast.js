const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=fc5faf21aafbc9af5f0bc4a505710757&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)+ '&units=f'

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]} It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. Wind speed is ${body.current.wind_speed}. Humidity is ${body.current.humidity}`)
        }
    })
}

module.exports = forecast