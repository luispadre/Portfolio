const express = require('express');
const path = require('path');
const dotEnv = require('dotenv');
const { skillsFront,
    skillsBack,
    skillsMovil,
    skillsOthers } = require('./data')
// const bodyParser =require( 'body-parser');
const handlebars = require('express-handlebars');
const cors = require('cors');
const morgan = require('morgan');

dotEnv.config();
const app = express();
app.use(cors());
// app.use(bodyParser())
// Htttp logger
app.use(morgan('combined'));

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'resources/views'));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    return res.render('home', {
        skillsFront,
        skillsBack,
        skillsMovil,
        skillsOthers,
        Portafolio
    });
})


// Serves static files (we need it to import a css file)
app.use(express.static('public'));


app.listen(process.env.PORT || 3000, () => {
    console.log(`🚀  Server ready at ${process.env.PORT | 3000}`);
});