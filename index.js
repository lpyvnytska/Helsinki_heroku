require('dotenv').config();
const express = require('express');

const app = express();
const morgan = require('morgan');
const cors = require('cors');
const Phone = require('./models/phone');
const errorHandler = require('./errorHandler');
const unknownEndpoint = require('./unknowEndpoint');

app.use(cors());
app.use(express.json());
app.use(express.static('build'));
morgan.token('body', (req) => {
  return JSON.stringify(req.body);
});
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

app.get('/api/persons', (request, response) => {
  Phone.find({})
    .then((result) => {
      if (result) {
        response.json(result);
      } else {
        response.status(404).end();
      }
    })
    .catch(() => {
      response.status(500).end();
    });
});

app.get('/info', (request, response) => {
  Phone.countDocuments()
    .then((result) => {
      response.send(`<div> Phonebook has info for ${result} people <br/> ${new Date()}</div>`);
    })
    .catch(() => {
      response.status(500).end();
    });
});

app.get('/api/persons/:id', (request, response, next) => {
  Phone.findById(request.params.id)
    .then((phone) => {
      if (phone) {
        response.json(phone);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

app.delete('/api/persons/:id', (request, response, next) => {
  Phone.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

app.put('/api/persons/:id', (request, response, next) => {
  const { body } = request;
  if (!body) {
    return response.status(400).json({
      error: 'content missing',
    });
  }
  const phone = {
    name: body.name,
    number: body.number,
  };

  Phone.findByIdAndUpdate(request.params.id, phone, {
    new: true,
    runValidators: true,
    context: 'query',
  })
    .then((updatedPhone) => {
      if (updatedPhone) {
        response.json(updatedPhone);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

app.post('/api/persons', (request, response, next) => {
  const { body } = request;
  const phone = new Phone({
    name: body.name,
    number: body.number,
  });

  phone
    .save()
    .then((savedPhone) => {
      response.status(201).json(savedPhone);
    })
    .catch((error) => next(error));
});

// handler of requests with unknown endpoint
app.use(unknownEndpoint);

// handler of requests with result to errors
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
