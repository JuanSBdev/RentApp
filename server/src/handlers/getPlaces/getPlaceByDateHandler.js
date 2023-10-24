const getPlaceByDateHandler = async (dates)=>{
    let { dates } = req.params;
    try {
        let result = await getPlacesByDateController(dates)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({errorDate: error.message})
    }
}
module.exports = getPlaceByDateHandler;