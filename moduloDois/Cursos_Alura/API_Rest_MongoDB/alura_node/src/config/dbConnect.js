import mongoose from "mongoose";

mongoose.connect("mongodb+srv://gabiazevedo:gabiazevedoms@node-express.1svku.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;
