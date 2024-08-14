import mongoose from "mongoose";
import { Databasename } from "../constants.js";


const Dataconnect= async ()=>{

    try {
        
      const mongodbconect=  await mongoose.connect(`${process.env.MONGODB_URL}/${Databasename}`)

      console.log(`\n mongodb connect!! dbHost name ${mongodbconect.connection.host}`)

    } catch (error) {
        
        console.log("Mongodb conection error",error)
        process.exit(1)
    }
}


export default Dataconnect