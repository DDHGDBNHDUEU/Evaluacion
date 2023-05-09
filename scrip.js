const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 2500

const electrodomesticosSchema = new mongoose.Schema({
    tipo: { type: String, required: "decir que electrodomestico es"},
    origen: { type: String, required: "decir donde fue fabricado"},
    precio: { type: Number, required:"decir cuanto vale" },
    stock: { type: Number, required: "decir la cantida de stock" },
  });