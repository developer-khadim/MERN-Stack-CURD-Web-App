const express = require('express');
const app = express();

require('./config/db');
const User = require('./model/usermodel');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});


// create user
app.post('/create', async (req, res) => {
    try {
        const { name, email, username } = req.body;
        const createduser = await User.create({
            name,
            username,
            email
        });
        res.send(createduser);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// update user
app.put('/update/:id', async (req, res) => {
    try {
        const { name, email, username } = req.body;
        const updateduser = await User.findOneAndUpdate(
            { _id: req.params.id },
            { name, email, username },
            { new: true }
        );
        res.send(updateduser);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// read user
app.get('/readone', async (req, res) => {
    // find = array
    // findOne = object     
    const readuser = await User.findOne({ username: "hamad123" });
    res.send(readuser);
});

// read all users
app.get('/readall', async (req, res) => {
    try {
        const readuser = await User.find();
        res.send(readuser);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// delete user
app.delete('/delete/:id', async (req, res) => {
    try {
        const deleteduser = await User.findOneAndDelete({ _id: req.params.id });
        res.send(deleteduser);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});