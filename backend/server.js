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

// For the build.
const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

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

// For deleting the film.
app.delete('/api/film/:id', async (req, res) => {
  // Logging it so you can see in the console.
  console.log("Delete: " + req.params.id);

  // Find the ID of the film and then delete the film.
  let film = await filmModel.findByIdAndDelete(req.params.id);
  res.status(200).send(film);
}
)

// For any other page than the ones above.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../build/index.html'));
});

// Which port the server is listening on.
app.listen(
  port, () => {
    console.log(`Listening on port ${port}`);
  }
)