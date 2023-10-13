const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//midleware
app.use(cors());
app.use(express.json());





//last
app.get('/', (req, res) => {
    res.send("COFFE MAKING SERVER IS RUNNING");
})
app.listen(port, () => {
    console.log(`COFFE MAKING SERVER IS RUNNING on port,${port}`)
})
