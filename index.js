const express = require('express')
const app = express()

app.use(express.json())

const persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    }
  ]
  
app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/info', (req, res) => {
    const result = `<div> Phonebook has info for ${persons.length} people <br/> ${new Date()}</div>`
    res.send(result)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(note => note.id === id)
    if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
  })
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body
    if (!(body&&body.name&&body.number)) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }
    if (persons.map(person => person.name).find((name)=>name===body.name)) {
        return response.status(400).json({error: 'name must be unique'})
    }
    const person = {
      name: body.name,
      number: body.number,
      id: Math.ceil(Math.random()*100000)
    }
    console.log(person)
    persons.push(person)
    //TODO: add location
    response.status(201).json(person)
  })

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})