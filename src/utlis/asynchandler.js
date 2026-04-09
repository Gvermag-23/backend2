// methid 1 by using promiese
const asynchandler=(requesthandler)=>{
    (req,res,next)=>{
        Promise.resolve(requesthandler(req,res,next)).
        catch((err)=>{next(err)})
    }

}
export {asynchandler}



// const asynchandler=()=>{}   step 1
// const asynchandler=(fun)=>{()=>{}}  step 2
// const asynchandler=(fun)=>{async ()=>{}}  step 3
// conclustion and step 3 both are same just we romve bracket

// method 2 by using async await we make a raper function

// const asynchandler=(fn)=>async (req,res,next)=>{
//     try {
//         await  fn(req,res,next)
//     } catch (error) {
//         res.status(error.code||500).json({
//             success:false,
//             message:error.message
//         })
//     }
// } //conclusion