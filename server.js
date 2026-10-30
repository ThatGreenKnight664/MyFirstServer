const express = require("express");

const app = express();
const PORT = 3000;

app.get("/",(req, res) => {
    res.send("<h1>Hello from my server! ehehehehe</h1>");
});

app.listen(PORT, () => {
    console.log("Sever running at http://localhost:" + PORT);
});