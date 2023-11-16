const getAvailabilityController = require("../../controllers/availability/getAvailabilityController")

let getAvailabilityHandler = async (req, res)=>{
    let {id, dateInit, dateEnd, guests, location} = req.body
    try {
      
        let result = await getAvailabilityController(id, dateInit, dateEnd, guests)
        if( result.length === 0){

            res.status(200).json("No tiene disponibilidad para estas fechas o esta cantidad de personas")
        }
        else{
            const place = result[0];
            const nightlyRate = place.dataValues.price_per_night || 0; 

            const startDate = new Date(dateInit);
            const endDate = new Date(dateEnd);
            const numberOfNights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

            const totalPrice = numberOfNights * nightlyRate;
            
            res.status(200).json({result, totalPrice})
        }
    } catch (error) {
        res.status(400).json(error)
    }
}
module.exports = getAvailabilityHandler;