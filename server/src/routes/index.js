const {Router} = require('express')

const getPlaces = require('../handlers/getPlaces/getPlaces')
const getPlaceById = require('../handlers/getPlaces/getPLaceByIdHandler');
const getPlaceByLocationHandler = require('../handlers/getPlaces/getPlaceByLocationHandler');


const router = Router();
router.use('/start', getPlaces )
router.use('/place/in/:location', getPlaceByLocationHandler )
router.use('/place/:id', getPlaceById )

module.exports = router;