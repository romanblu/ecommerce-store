import jwt from 'jsonwebtoken'


// verify token
function verifyToken(req, res, next){
    // get auth header
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        // split at the space
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        if(bearerToken === null ) return res.status(401);
        // set the token 
        jwt.verify(bearerToken, process.env.SECRET, (err, user) => {
            if(err) return res.status(403)
            req.user = user;
        })
        next(); 
    } else {
        // forbiden
        res.sendStatus(403);
    }
}

export default verifyToken;