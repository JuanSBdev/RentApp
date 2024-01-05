const getAvailabilityController = require("../../controllers/availability/getAvailabilityController")
const getPrice = require("./getPrice")

let getAvailabilityHandler = async (req, res)=>{
    let {id, dateInit, dateEnd, guests} = req.query
    try {
      
        let result = await getAvailabilityController(id, dateInit, dateEnd, guests)
                console.log(id, dateInit, dateEnd, guests)

        if( result.length === 0){

            res.status(200).json("No tiene disponibilidad para estas fechas o esta cantidad de personas")
        }
        else{
           let place = result[0]
            let price = await getPrice(place, dateInit, dateEnd)
            res.status(200).json({place, price, dateInit, dateEnd})
        }
    } catch (error) {
        res.status(400).json(error)
    }
}
module.exports = getAvailabilityHandler;