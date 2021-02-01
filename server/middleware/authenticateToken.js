const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authenticateToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[0];
        const isGoogleAuth = token.length > 500;
        let decodedToken;

        if (token && !isGoogleAuth) {
            decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            req.userId = decodedToken?.id

        } else if (token && isGoogleAuth) {
            decodedToken = jwt.decode(token);
            req.userId = decodedToken.sub; //it is like account id for google.

        }

        if (!token) return res.status(400).json({message: 'No token exists'});

        next();
    } catch (error){
        console.log(error)
    }
}

module.exports = {authenticateToken};