const express = require('express');
const app = express ();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const router = require("./routes")
app.use('/api', router);

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

module.exports = app;