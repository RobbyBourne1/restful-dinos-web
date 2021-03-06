const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')

const app = express()
app.engine('mst', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mst')

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

let allDinos = [
  {
    id: 1,
    name: 'T-Rex',
    color: ['Green', 'Red'],
    diet: 'Carnivore',
    imageurl: 'http://www.trexcafe.com/images/cover/cover_trex.png'
  },
  {
    id: 2,
    name: 'Raptor',
    color: ['Green', 'Purple'],
    diet: 'Carnivore',
    imageurl:
      'http://vignette3.wikia.nocookie.net/jurassicpark/images/5/51/Jurassic-world-raptor-delta.jpg/revision/latest?cb=20150213174656'
  },
  {
    id: 3,
    name: 'Stegosaurus',
    color: ['Green', 'Yellow'],
    diet: 'Herbivore',
    imageurl: 'https://www.newdinosaurs.com/wp-content/uploads/2016/01/28_stegosaurus_karen_carr.jpg'
  },
  {
    id: 4,
    name: 'Triceratops',
    color: ['Orange', 'Yellow'],
    diet: 'Herbivore',
    imageurl:
      'https://vignette2.wikia.nocookie.net/dino/images/f/f6/JW_triceratops.png/revision/latest?cb=20150407211112'
  }
]

app.get('/', (request, response) => {
  response.render('index', { allDinos: allDinos })
})

app.get('/input', (request, response) => {
  response.render('input', { dino: {}, method: 'post' })
})

// CREATING a new DINO
app.post('/', (request, response) => {
  const insertDino = {
    id: allDinos.length + 1,
    name: request.body.name,
    color: request.body.color,
    diet: request.body.diet,
    imageurl: request.body.imageurl
  }
  allDinos.push(insertDino)
  response.redirect('/')
})

app.delete('/:id', (request, response) => {
  const dinoId = parseInt(request.params.id)
  allDinos = allDinos.filter(dino => dino.id !== dinoId)
  response.redirect(303, '/')
  // response.json({ status: 'ok', newUrl: '/', deletedDino: dinoId })
})

app.get('/edit/:id', (request, response) => {
  const dinoId = parseInt(request.params.id)
  dino = allDinos.find(dino => dino.id === dinoId)

  response.render('input', { dino: dino, method: 'patch' })
})

// UPDATING a new DINO
app.patch('/:id', (request, response) => {})

app.listen(3000, () => {
  console.log('Clever Girl')
})

/*
GET /dinos        => list of the dinos
GET /dinos/1      => show info about dino #1
GET /dinos/edit/1 => show a form to edit dino #1
PATCH /dinos/1    => update dino #1
DELETE /dinos/1   => delete dino #1
GET /dinos/new    => Show a form for a new dino
POST /dinos       => Create a new dino
*/
