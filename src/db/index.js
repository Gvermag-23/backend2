
import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";

// db is in pther continet means we use async
const connectDB=async()=>{
    try{
       const connectionInstances= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongo db connected!! DB HOST: ${ connectionInstances.connection.host}`);
        
    }
    catch(error){
        console.log("monodb cooncetion error",error);
        process.exit(1)
        
    }
}
export default connectDB;