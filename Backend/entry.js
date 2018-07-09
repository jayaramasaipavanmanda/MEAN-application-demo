var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var app = express();
var path = require('path');
const route = require('./routes/routes');
mongoose.connect('mongodb://localhost:27017/shoppinglist');

mongoose.connection.on('connected', () => { console.log("connected to port 27017") });
mongoose.connection.on('error', (err) => { console.log(err) });

function multiply(num) {
    return new Promise((resolve, reject) => {
        if (num) {
            setTimeout(() => {
                function multiply() { resolve(); }

                //console.log('Hello');
            }, 2000);
        }

        reject({
            error: "no number"
        })
    })
}
function value() {
    return "returned";
}
var dummy = value();
console.log(dummy);
multiply("hello").catch(err => { throw new Error('Error occured') })
    .catch((err) => console.log(err.error));


const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use('/api', route);
// app.use(express.static(path.join(__dirname, 'public')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// })



app.listen(PORT, () => { console.log("running on port:" + PORT) });
