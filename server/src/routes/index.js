const {Router} = require('express')

const getPlaces = require('../handlers/getPlaces/getPlaces')
const getPlaceById = require('../handlers/getPlaces/getPLaceByIdHandler');
const getPlaceByLocationHandler = require('../handlers/getPlaces/getPlaceByLocationHandler');
const getPlaceByGuestsHandler = require('../handlers/getPlaces/getPlaceByGuestsHandler');
const getPlaceByDateHandler = require('../handlers/getPlaces/getPlaceByDateHandler');
const getPlaceForm = require('../handlers/getPlaces/getPlaceForm');


const router = Router();
router.use('/start', getPlaces )
router.use(`/place/dates/:dateInit/:dateFinish`, getPlaceByDateHandler )
router.use('/place/in/:location', getPlaceByLocationHandler )
router.use('/place/for/:guests', getPlaceByGuestsHandler )
router.use('/place/:location/:dateInit/:dateFinish/:guests',  getPlaceForm)
router.use('/place/:id', getPlaceById )


module.exports = router;