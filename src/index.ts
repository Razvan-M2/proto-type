import express from "express";
const app = express();

app.get("/", function (req, res) {
    res.send("Hello World!");
});


app.get("/index", function (req, res) {
    res.send("This is the Index Endpoint!");
});
app.listen(3000);