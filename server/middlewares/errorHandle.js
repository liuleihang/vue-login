const errHandle = (ctx,next)=>{
    console.log('errHandle-1-',ctx)
    return next().catch((err)=>{
        console.log('errHandle-err-',ctx.status,err)
        if(err === 401){
            ctx.status = 401;
            ctx.body = {
                message:"请登录后访问"
                //message : err.originalError ? err.originalError.message : err.message,
            }
        }else{
            //throw err;
            ctx.status = 404;
            ctx.body = {
                message:err.message
                //message : err.originalError ? err.originalError.message : err.message,
            }
        }
    })
}
export default errHandle;