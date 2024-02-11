import mongoose from 'mongoose'
mongoose.set("strictQuery",false);

const mongoDB=process.env.PORT
main().catch(err=>console.log(err))


async function main(){
    await mongoose.connect(mongoDB);
}

//defining a schema

const schema= mongoose.Schema;

// const SomeSchema = new schema({
//     aString:String,
//     aDate:Date,
// })
//after a schema is made we can make a model out of it using the model method

//schema with validators

const SomeSchema = new Schema({
    id:{
        type:Number,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    pages:{}
})

const SomeModel= mongoose.model("someModel",SomeSchema)

// const schema = new Schema({
//     name: String,
//     binary: Buffer,
//     living: Boolean,
//     updated: { type: Date, default: Date.now() },
//     age: { type: Number, min: 18, max: 65, required: true },
//     mixed: Schema.Types.Mixed,
//     _someId: Schema.Types.ObjectId,
//     array: [],
//     ofString: [String], // You can also have an array of each of the other types too.
//     nested: { stuff: { type: String, lowercase: true, trim: true } },
//   }); all of the schema types that are useds

//mongoose provides validators which can be used to specify the acceptable range of values and the error messages for validation failure in all classes 

//all schema types are provided with a validator of required or not required

//numbers have min max validators

//strings have enum,that specifies the set of allowed values for the field 

//virtual properties are document properties that you can get and set but that do not persist

