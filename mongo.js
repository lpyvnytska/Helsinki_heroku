const mongoose = require('mongoose');
require('dotenv').config();

const password = process.argv[2] || process.env.MONGO_PASSWORD;
const name = process.argv[3];
const number = process.argv[4];

if (!password) {
  console.log('Please provide the password as an argument: node mongo.js <password>');
  process.exit(1);
}

const url = `mongodb+srv://fullstack:${password}@devconnector-bch9i.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const phoneSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Phone = mongoose.model('Phone', phoneSchema);

if (name && number) {
  const phone = new Phone({
    name,
    number,
  });

  phone.save().then(() => {
    console.log(`added ${name} number ${number} to phonebook`);
    mongoose.connection.close();
  });
} else {
  Phone.find({}).then((result) => {
    console.log('phonebook:');
    result.forEach((note) => {
      console.log(`${note.name} ${note.number}`);
    });
    mongoose.connection.close();
  });
}
