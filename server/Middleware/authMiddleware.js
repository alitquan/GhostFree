import config from '../config.js'
import jwt from 'jsonwebtoken';


const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    try { 
        console.log('middleware.js -- authMiddleware()')
        console.log('middleware.js -- token -- ', token)
        const decoded = jwt.verify(token, config.JWT_SECRET);
        console.log('middleware.js -- decoded user -- ', decoded);
        req.userID = decoded.id; 
        next()
    } 

    catch { 
        res.status(401).json({message: 'Invalid token'}); 
    } 

} 

export default authMiddleware;
