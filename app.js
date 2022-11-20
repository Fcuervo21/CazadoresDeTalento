import express from 'express';
import flash from 'connect-flash';


import homeRoute from './server/routes/home.js';
import cazadorRoute from './server/routes/cazador.js';
import talentoRoute from './server/routes/talento.js';
import mostrarTalentosRoute from './server/routes/mostrarTalento.js';
import proyectosRoute from './server/routes/proyectos.js';
import citasRoute from './server/routes/citas.js';
import contratoRoute from './server/routes/contrato.js';



const app = express();


const PORT = process.env.PORT || 3000;

app.use(flash());
app.use(express.static('public'));
app.set('port', PORT);
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public")); // Para colocar la carpeta public con css, img
app.use(express.json());

// Views ejs
app.set('view engine', 'ejs');
app.set('views', "./client/views");

// Routes
app.use('/', homeRoute, express.static('client/public'));
app.use('/cazadorHome', cazadorRoute, express.static('client/public'));
app.use('/talentoHome', talentoRoute, express.static('client/public'));
app.use('/mostrarTalentos', mostrarTalentosRoute, express.static('client/public'));
app.use('/proyecto', proyectosRoute, express.static('client/public'));
app.use('/cita', citasRoute, express.static('client/public'));
app.use('/contrato', contratoRoute, express.static('client/public'));

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${PORT}`);
})
