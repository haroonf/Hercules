const express = require('express')
const routineController = require('../controllers/routineController')

const app = express()

//create our express router
const router = express.Router()

router
  .route('/')
  .post(routineController.postRoutine)

//create endpoint handlers for /routne
router
  .route('/:routine_name')
  .get(routineController.getRoutine)

router
  .route('/')
  .get(routineController.getRoutines)

router
  .route('/:routine_name')
  .delete(routineController.deleteRoutine)

router
  .route('/:routine_name')
  .put(routineController.putRoutine)
  
module.exports = router
