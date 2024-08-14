import Dataconnect from "./db/index.js";
import dotenv from "dotenv"


dotenv.config({path:'./'})


Dataconnect().then(()=>{
    app.listen(process.env.PORT|| 4000,()=>{
        console.log(`server is running on port${process.env.PORT}`)
    })
}).catch((error)=>{
    console.log("mongodb conection failed",error)
})








// const app = express()

// const port =  3000;
// ( async ()=>{
//     try {
        
//         await mongoose.connect(`${process.env.MONGODB_URL}/${Databasename}`)

//         app.on("error",(error)=>{
//             console.log("error",error)
//             throw error
//         })

//         app.listen(port, () => {
//             console.log(`server is running on port ${port}`);
//         });

//     } catch (error) {
//         console.error("Error",error)
//         throw error
//     }
// })()