const express = require('express')

const app = express()

//create our express router
const router = express.Router()

router
  .route('/')
  .get(function getMeal(req, res){
    //res.send('got meal request')
    res.json({ meal: 'sushi' })

  })

module.exports = router
