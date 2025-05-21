require("dotenv").config();

const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.dllfejl.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`;
    await mongoose.connect(uri);
    console.log("Conexão com Base de Dados realizada com sucesso!");
  } catch (err) {
    console.error("Erro ao conectar com o banco de dados:", err.message);
  }
};

module.exports = connectToDatabase;
