const endpoint = 'http://localhost:5000/accommodations'
const axios = require('axios')
const {Place} = require('../../db')

let getPlaces = async (req, res)=>{
    try {
        const response = await axios.get(endpoint)
        const data = response.data;
        const place = data.map(placeX =>{
            return({
                name: placeX.name,
                type: placeX.type,
                location: placeX.location,
                price_per_night:placeX.price_per_night,
                rating:placeX.rating,
                services:placeX.services,
                unavailable_dates:placeX.unavailable_dates


            })
        })
    
        let places = await Place.bulkCreate(place)

        res.status(200).json(places)
        
    } catch (error) {
        console.log('problem:' + error)
        res.status(400).json(error.message)
    }
}
module.exports = getPlaces;