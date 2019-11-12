var express = require('express')
var router = express.Router()


router.get('/', (req, res) => res.send('get blog success'))
router.post('/', (req, res) => res.send('post blog success'))
router.put('/', (req, res) => res.send('put blog success'))
router.delete('/', (req, res) => res.send('delete blog success'))

module.exports = router