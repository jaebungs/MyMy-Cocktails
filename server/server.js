const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const cocktailsRoutes = require('./routes/cocktails');
const userRoutes = require('./routes/user');
const mybarRoutes = require('./routes/mybar');

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Mongodb connected');
  })
  .catch((err) => console.log(err));

const app = express();
const PORT = process.env.PORT || 5000;
const db = mongoose.connection;

db.on('error', (err) => {
  console.log(err);
});
db.once('connected', () => {
  console.log('Connected to Database');
});

app.use(cors());
app.use(express.json());

// Routes
// next time use /api/v1/cocktails for version control
app.use('/cocktails', cocktailsRoutes);
app.use('/user', userRoutes);
app.use('/mybar', mybarRoutes);

app.get('/', (req, res) => {
  res.send('Hi, this is REST API fro MyMyCocktail website. /cocktails - to get all recipes.');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
