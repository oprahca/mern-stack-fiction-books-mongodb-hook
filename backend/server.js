const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://admin:admin1234@cluster0.shv2e.mongodb.net/react-projects?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true });

const db = mongoose.connection;
db.once('open',() => {
    console.log("MongoDB database connection established successfully");
})

const bookRouter = require('./books');
app.use('/books',bookRouter);

app.listen(port,() => {
    console.log(`Server is running on port: ${port}`);
})