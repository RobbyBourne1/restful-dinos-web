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
    diet: 'Carnivore'
  },
  {
    id: 2,
    name: 'Raptor',
    color: ['Green', 'Purple'],
    diet: 'Carnivore'
  },
  {
    id: 3,
    name: 'Stegosaurus',
    color: ['Green', 'Yellow'],
    diet: 'Herbivore'
  },
  {
    id: 4,
    name: 'Triceratops',
    color: ['Orange', 'Yellow'],
    diet: 'Herbivore'
  }
]

app.get('/', (request, response) => {
  response.send('Hello World')
})

// app.get('/api/dinos', (request, response) => {
//   response.json(allDinos)
// })
//
// app.get('/api/dinos/:id', (request, response) => {
//   const dinoId = parseInt(request.params.id)
//   const thisDino = allDinos.find(dino => {
//     return dino.id === dinoId
//   })
//   response.json(thisDino)
// })
//
// app.get('/api/dinos/:id/color', (request, response) => {
//   const dinoId = parseInt(request.params.id)
//   const thisDino = allDinos.find(dino => {
//     return dino.id === dinoId
//   })
//   response.json(thisDino.color)
// })
//
// app.post('/api/dinos', (request, response) => {
//   let newDino = {
//     id: allDinos.length + 1,
//     name: request.body.name,
//     color: request.body.color,
//     diet: request.body.diet
//   }
//   allDinos.push(newDino)
//   response.json(newDino)
// })
//
// app.put('/api/dinos/:id', (request, response) => {
//   const dinoId = parseInt(request.params.id)
//   if (dinoId !== allDinos.id) {
//     allDinos.push(dinoId)
//   }
//   response.json(allDinos)
// })
//
// app.delete('/api/dinos/:id', (request, response) => {
//   const dinoId = parseInt(request.params.id)
//   allDinos = allDinos.filter(dino => dino.id !== dinoId)
//   response.json(allDinos)
// })

app.listen(3000, () => {
  console.log('Clever Girl')
})
