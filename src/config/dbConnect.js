import mongoose from "mongoose";

mongoose.connect('mongodb+srv://Alura:123@cluster0.pp77q3e.mongodb.net/alura-node');

let db = mongoose.connection;

export default db;