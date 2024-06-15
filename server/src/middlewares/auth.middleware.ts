import  jwt  from "jsonwebtoken";

const authMiddleware=(req:any,res:any, next:any)=>{
    try{
        const token=req.headers.auth;
        jwt.verify(token,   "ghiurjeb8nvl+-pq4irnp5rvnpirvnbripnv4");
        next();
        
    }catch(error){
        return res.status(401).json({
            'text':'Nepateiktas arba neteisingas JWT'
        });

    }
    
}

export { authMiddleware };