const express = require('express')
const app = express()
const port = 4000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
// Above is required lines for the below to function.

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.b7svslt.mongodb.net/?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const filmSchema = new mongoose.Schema({
  title: String,
  cover: String,
  director: String
})

const filmModel = mongoose.model('my_films', filmSchema);

// Allow requests from other URLs.
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Home page.
app.get('/', (req, res) => {
  res.send('<br/><br/><br/><h2 style="text-align:center;">Film Collection API</h2>')
})

app.post('/api/film', (req, res) => {
  console.log(req.body);
  // For MongoDB
  filmModel.create({
    title: req.body.title,
    cover: req.body.cover,
    director: req.body.director
  })
    .then(() => { res.send("Film created. ") })
    .catch(() => { res.send("Film was NOT created. ") });
})

// API to use.
app.get('/api/films', async (req, res) => {
  let films = await filmModel.find({});
  res.json(films);
}
)

// Find by the ID.
app.get('/api/film/:identifier', async (req, res) => {
  console.log(req.params.identifier)
  let film = await filmModel.findById(req.params.identifier);
  res.send(film);
})

// Find by the ID and then update the film.
app.put('/api/film/:id', async (req, res) => {
  console.log("Update: " + req.params.id);

  let film = await filmModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(film);
})

// Which port the server is listening on.
app.listen(
  port, () => {
    console.log(`Listening on port ${port}`);
  }
)