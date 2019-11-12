var express = require('express')
var router = express.Router()


router.get('/', (req, res) => res.send('get user success'))
router.post('/', (req, res) => res.send('post user success'))
router.put('/', (req, res) => res.send('put user success'))
router.delete('/', (req, res) => res.send('delete user success'))

module.exports = router