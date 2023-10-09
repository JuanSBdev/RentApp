const {Router} = require('express')

const getPlaces = require('../handlers/getPlaces/getPlaces')

const router = Router();

router.use('/start', getPlaces )

module.exports = router;