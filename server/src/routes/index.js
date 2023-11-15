const {Router} = require('express')

const getPlaces = require('../handlers/getPlaces/getPlaces')
const getPlaceById = require('../handlers/getPlaces/getPLaceByIdHandler');
const getPlaceByLocationHandler = require('../handlers/getPlaces/getPlaceByLocationHandler');
const getPlaceByGuestsHandler = require('../handlers/getPlaces/getPlaceByGuestsHandler');
const getPlaceByDateHandler = require('../handlers/getPlaces/getPlaceByDateHandler');
const getPlaceForm = require('../handlers/getPlaces/getPlaceForm');
const createUserHandler = require('../handlers/Users/createUserHandler');
const userRouter = require('./userRouter');
const getAvailabilityHandler = require('../handlers/abiability/getAvailabilityHandler');


const router = Router();
// server.get('/', (req, res)=> getPlaces(req, res))

router.get('/start', getPlaces )
router.get('/place/:location/:dateInit/:dateFinish/:guests',  getPlaceForm)
router.get(`/place/dates/:dateInit/:dateFinish`, getPlaceByDateHandler )
router.get('/place/in/:location', getPlaceByLocationHandler )
router.get('/place/for/:location/:guests', getPlaceByGuestsHandler )
router.get('/place/:id', getPlaceById )
router.get('/availability', getAvailabilityHandler )
// router.use('/user', userRouter )
router.post('/user', createUserHandler )




module.exports = router;