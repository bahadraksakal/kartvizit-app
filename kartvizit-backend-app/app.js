const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const CardRoute = require('./routes/cardRoute');
const AuthRoute = require('./routes/authRoute');

const mongoConfig = require('./app.config');

const app = express();
app.use(cors({
    origin: '*',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization'
  }));

mongoose.set('strictQuery', false);

mongoose.connect(mongoConfig.connectionString).then(() => {
    console.log("db connected");
}).catch(err => { console.log(err); });

app.use(express.json());

app.get('/', (req, res) => { res.json({ message: "welcome" }) })
app.use('/cards', CardRoute);
app.use('/auth', AuthRoute);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is live on port ${port}`);
});