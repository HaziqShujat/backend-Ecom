


const AsyncHandeler =(reqhandler)=>{
    (req,res,next) => {
        Promise.resolve(reqhandler(req,res,next)).catch((error)=> next(error))
    }
}


export {AsyncHandeler}


// const AsyncHandeler =(func) => async (req,res,next)=>{
//     try {
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             status:false,
//             mesage:"error in asynchandler"
//         })
//     }
// }