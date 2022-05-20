const express = require('express')
const PORT = process.env.PORT || 5000
var app = express();
var fire = require('./fire')
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send(
    '<h1>API Express & Firebase Cloud Firestore</h1><ul><li><p><b>GET /ver</b></p></li><li><p><b>POST /insertar</b>  => {calor,ruido,gas}</p></li></ul>')
})

app.get('/ver', (req, res) => {
  const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    var wholeData = []
	db.collection('macetaauto').orderBy('fecha', 'asc').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
      
        wholeData.push(doc.data())
      });
      console.log(wholeData)
      res.send(wholeData)
    })
    .catch(error => {
      console.log('Error!', error);
  })
})

app.post('/insertar', (req, res)=>{
  const db = fire.firestore();
	db.settings({
      timestampsInSnapshots: true
    });
    db.collection('macetaauto').add({
      temperatura: req.body.temperatura,
      humedad: req.body.humedad,
      luminosidad: req.body.luminosidad,
      fecha: new Date()
    });
    res.send({
      temperatura: req.body.temperatura,
      humedad: req.body.humedad,
      luminosidad: req.body.luminosidad,
      fecha: new Date(),
      status: 'Valores insertados!'
  })
})


app.listen(PORT, () => {
  console.log(`escuchando en puerto ${ PORT }`)
})
