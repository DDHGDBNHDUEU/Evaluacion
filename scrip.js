const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 2500
const password = 'mayra2007';
const uri ='mongodb+srv://May: ${password} @tarea.ukuqqcc.mongodb.net/?retryWrites=true&w=majority';

let electrodomesticos = {

  "televisor": {
    "origen": "China",
    "precio": 500,
    "stock": 20
  },

  "celular": {
    "origen": "Argentina",
    "precio": 200,
    "stock": 90
  },

  "audifonos": {
    "origen": "japon",
    "precio": 58,
    "stock": 3
  }, 
  
  "computadora": {
    "origen": "italia",
    "precio": 50,
    "stock": 2
  },

  "aspiradora": {
    "origen": "Mexico",
    "precio": 80,
    "stock": 10
  },

  "licuadora": {
    "origen": "España",
    "precio": 70,
    "stock": 12
  },

  "batidora": {
    "origen": "Brasil",
    "precio": 90,
    "stock": 18
  },

  "lavaropas": {
    "origen": "Corea del Sur",
    "precio": 400,
    "stock": 5
  },

  "microondas": {
    "origen": "China",
    "precio": 70,
    "stock": 9
  },

  "heladera": {
    "origen": "Argentina",
    "precio": 230,
    "stock": 100
  },
}
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

mongoose.connect( uri ,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}
);