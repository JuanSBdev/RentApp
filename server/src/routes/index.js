const {Router} = require('express')

const getPlaces = require('../handlers/getPlaces/getPlaces')
const getPlaceById = require('../handlers/getPlaces/getPLaceByIdHandler')


const router = Router();

router.use('/start', getPlaces )
router.use('/place/:id', getPlaceById )

module.exports = router;