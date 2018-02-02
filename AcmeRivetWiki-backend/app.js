var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser')
var validator = require('express-validator')
var app = express();
var Rivet = require('./models').Rivet


app.use(express.static('public'))
app.use(validator())
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({message: 'API Example App'})
});

app.get('/rivets', (req, res) => {
  Rivet.findAll().then((rivets) => {
    res.json({
        rivets: rivets
    })
  })
})



app.post('/rivets', (req, res) => {
  req.checkBody('name', 'Is required').notEmpty()
  req.checkBody('size', 'Is required').notEmpty()
  req.checkBody('material', 'Is required').notEmpty()
  req.checkBody('capacity', 'Is required').notEmpty()
  req.checkBody('description', 'Is required').notEmpty()

  // Now we can run our validations
  req.getValidationResult()
    .then((validationErrors) =>{
      // If there are no errors, go ahead and create rivet
      if(validationErrors.isEmpty()){
        Rivet.create({
            name: req.body.name,
            size: req.body.size,
            material: req.body.material,
            capacity: req.body.capacity,
            description: req.body.description
        }).then((rivet)=>{
          res.status(201)
          res.json({rivet: rivet})
        })
      }else{
        // Uh ohh,  there were validation issues.  Report them back to the user.
        res.status(400)
        res.json({errors: {validations: validationErrors.array()}})
      }
    })
})



module.exports = app
