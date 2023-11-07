const endpoint = 'http://localhost:5000/accommodations'
const axios = require('axios')
const { Place}  = require('../../db')

let getPlaces = async (req, res)=>{
    try {
        const response = await axios.get(endpoint)
        const data = response.data;
        const createdPlaces = [];

        for (const placeX of data) {
            const [place, created] = await Place.findOrCreate({
                where: { name: placeX.name },
                defaults: {
                    type: placeX.type,
                    location: placeX.location,
                    price_per_night: placeX.price_per_night,
                    rating: placeX.rating,
                    services: placeX.services,
                    unavailable_dates: placeX.unavailable_dates,
                    max_occupancy_per_room: placeX.max_occupancy_per_room,
                    number_of_rooms: placeX.number_of_rooms,
                },
            });

            createdPlaces.push(place.toJSON()); // Agregar el lugar a la lista de lugares creados o encontrados
        }

        res.status(200).json({message:'Lugares encontrados y actualizados'});

        // const place = data.map(placeX =>{
        //     return({
        //         name: placeX.name,
        //         type: placeX.type,
        //         location: placeX.location,
        //         price_per_night:placeX.price_per_night,
        //         rating:placeX.rating,
        //         services:placeX.services,
        //         unavailable_dates:placeX.unavailable_dates,
        //         max_occupancy_per_room:placeX.max_occupancy_per_room,
        //         number_of_rooms:placeX.number_of_rooms


        //     })
        // })
    
        // let places = await Place.bulkCreate(place)

        // res.status(200).json(places)
        
    } catch (error) {
        console.log('problem:' + error)
        // res.status(400).json(error)
    }
}
module.exports = getPlaces;