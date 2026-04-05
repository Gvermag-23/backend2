
import dotenv from "dotenv";
import connectDB from "./db/index.js";
 


dotenv.config({
    path:'./env'
})

connectDB()













// METHOD 1

// import express from "express";
// //database connection by arrow fun
// (async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}
//         /${DB_NAME}`)
//         app.on("errror",(error)=>{
//             console.log("error application is not abel to talk to data base",error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`app is litening on port${process.env.PORT}`);
            
//         })
//     }
//     catch(error){
//     console.error("ERROR OCCURED",error)
//     throw err
//     }
    
// })()