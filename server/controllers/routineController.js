const Routine = require('../models/routineModel')
const debug = require('debug')('Hercules:routineController')

exports.postRoutine = function postRoutine(req, res) {
  const routineName = req.body.name
  debug(`postRoutine routineName: ${routineName}`)

  const routine = new Routine()
  routine.set(req.body)

  routine.save((err) => {
    if (err) {
      debug(`postRoutine routine.save error ${err}`)
      res.status(500).json(err)
    } else {
      debug('postRoutine routine.save successful')
      res
        .status(200)
        .json({message: 'Routine posted'})
    }
  })
}

exports.getRoutine = function getRoutine(req, res) {
  const routineName = req.params.routine_name
  debug(`getRoutine req.params.routine_name: ${routineName}`)

  Routine.findOne({name: routineName}).exec((err, routine) => {
    if(err || !routine) {
      res.send('No routine found\n')
    } else {
      res.send(routine)
    }
  })
}

exports.getRoutines = function getRoutines(req, res) {
  debug(`getRoutines`)

  Routine.find().exec((err, results) => {
    if(err || !results) {
      res.send('No routine found\n')
    } else {
      res.send(results)
    }
  })
}

exports.deleteRoutine = function deleteRoutine(req, res) {
  const routineName = req.params.routine_name
  debug(`deleteRoutine req.params.routine_name: ${routineName}`)
  Routine.findOne({name: routineName}).exec((err, routine) => {
    if(err || !routine) {
      res.send('Routine not found or deleted\n')
    } else {
      Routine.deleteOne({ name: routineName }).exec((err, routine) => {
        if(err || !routine) {
          res.send('Routine not deleted\n')
        } else {
          debug('deleteRoutine Routine.deleteOne successful')
          res
            .status(200)
            .json({message: 'Routine deleted'})
        }

      })
    }
  })
}

exports.putRoutine = function putRoutine(req, res) {
  const routineName = req.params.routine_name
  debug(`putRoutine req.params.routine_name: ${routineName}`)

  Routine.findOne({name: routineName}).exec((err, routine) => {
    if(err || !routine) {
      res.send('Routine not found or updated\n')
    } else {
      routine.set(req.body)
      routine.save((err) => {
        if (err) {
          debug(`putRoutine routine.save error ${err}`)
          res.status(500).json(err)
        } else {
          debug('putRoutine routine.save successful')
          res
            .status(200)
            .json({message: 'Routine updated'})
        }
      })
    }
  })
}
