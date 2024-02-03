const express = require('express')

const app = express();

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://ujjwalpuri22:ujjwal123@cluster0.0rrauuz.mongodb.net/";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    first_name:{type:String, required:true, maxLength:200},
    family_name:{type:String, required:true, maxLength:200},
    birthDate:{type:Date},
    deathDate:{type:Date}
})