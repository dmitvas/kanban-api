const express = require('express'); // import express from 'express'
const routes = require("./routes");
const bp = require("./bodyParser");
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');


bp(app);
routes(app);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})