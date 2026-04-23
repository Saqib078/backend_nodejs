const jwt = require("jsonwebtoken")

async function authArtist(req,res, next){
    const token = req.cookies.token;
    
        if (!token) {
            return res.status(401).json({
                message: "you dont have a ID Card"
            })
        }
    
        try {
            const decode = jwt.verify(token, process.env.JWT_KEY)
    
            if (decode.role !== "artist") {
                return res.status(409).json({
                    message: "you are not a artist , you dont have a ID Card to create a music "
                })
            }

            req.user = decode
            next()
        }
        catch(err){
            res.status(401).json({
                message:"error occur"
            })
            process.exit(1)
        }
}

async function authUser(req,res, next){
    const token = req.cookies.token;
    
        if (!token) {
            return res.status(401).json({
                message: "you dont have a ID Card"
            })
        }
    
        try {
            const decode = jwt.verify(token, process.env.JWT_KEY)
    
            if (decode.role !== "user") {
                return res.status(409).json({
                    message: "you are not a user , you dont have a ID Card to get all music "
                })
            }

            req.user = decode
            next()
        }
        catch(err){
            res.status(401).json({
                message:"error occur"
            })
            process.exit(1)
        }
}


module.exports = {authArtist , authUser}