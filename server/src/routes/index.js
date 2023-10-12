const {Router} = require('express')

const getPlaces = require('../handlers/getPlaces/getPlaces')
const getPlaceById = require('../handlers/getPlaces/getPLaceByIdHandler');
const getPlaceByLocationHandler = require('../handlers/getPlaces/getPlaceByPlaceHandler');


const router = Router();

router.use('/', getPlaces )
router.use('/place/:id', getPlaceById )
router.use('/place/:location', getPlaceByLocationHandler )

module.exports = router;