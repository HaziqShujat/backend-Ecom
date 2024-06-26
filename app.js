import express from "express";
import 'dotenv/config';

const app = express();

app.get('/', (req, res) => {
    res.send("hello from server");
});
app.get('/about', (req, res) => {
    res.send("hello from server this is about page");
});


const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

module.exports = app; 