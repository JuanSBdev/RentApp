const getPlaceByLocationController = require("../../controllers/getPlaces/getPlaceByLocationController");
const getPlacesByDateController = require("../../controllers/getPlaces/getPlacesByDateController");
const getPlacesByGuestsController = require("../../controllers/getPlaces/getPlacesByGuestsController");

 let getPlaceForm = async  (req, res)=>{
    let { location, dateInit, dateFinish, guests } = req.params
    try {
        let resultLocation = await getPlaceByLocationController(location)
        let resultDate = await getPlacesByDateController(dateInit, dateFinish)
        let resultGuests = await getPlacesByGuestsController(guests)

        const combinedResults = resultLocation.filter(placeLocation =>
            resultDate.some(placeDate => resultGuests.some(placeGuests =>
              placeLocation.id === placeDate.id && placeLocation.id === placeGuests.id
            ))
          );
        if(combinedResults.length === 0){

            res.status(200).json({message: 'no se encontraron alojamientos con estos datos'})
        }
        res.status(200).json(combinedResults)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports = getPlaceForm;