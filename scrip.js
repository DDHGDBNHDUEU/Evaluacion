const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 2500
const password = 'mayra2007';
const uri ='mongodb+srv://May: ${password} @tarea.ukuqqcc.mongodb.net/?retryWrites=true&w=majority';

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

mongoose.connect( uri ,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}
);