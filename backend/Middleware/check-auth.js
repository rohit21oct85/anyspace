const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

    const token = req.headers.authorization?req.headers.authorization.split(" ")[1]:null;
    if (!token) {
        res.status(401).json({
            message: 'Auth failed'
        });
    } else {
        jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
            if (err) {
                res.status(401).json({
                    message: 'Auth failed'
                });
            } else {

                req.body.userId = decoded.userId;
                next()
            }
        })
    }



}