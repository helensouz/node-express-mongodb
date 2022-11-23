import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://helenoliveiraol:helen123@alura-node.9yu21dq.mongodb.net/node-database")


let db = mongoose.connection;


export default db