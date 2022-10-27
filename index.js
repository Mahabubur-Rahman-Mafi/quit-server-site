const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

var cors = require("cors")
app.use(cors());

const courses= require('./data/courses.json')

const categories = require('./data/category.json')
const details = require('./data/details.json')


app.get('/', (req, res) => {
    res.send('Hello')
})
app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
     const selectedCourse = courses.find((n) => n._id === id);
     res.send(selectedCourse);
});
app.get('/details/:url', (req, res) => {
    const id = req.params.id
     const selectedName = details.find((n) => n._url === id);
     res.send(selectedName);
});

app.listen(port, () => {
  console.log(port);
});