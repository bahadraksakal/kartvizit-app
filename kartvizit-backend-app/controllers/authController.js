const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {secureKey} = require('../app.config');

exports.createUser = async (req, res) => {
    try {
        console.log(req.body);
        //Kullanıcının zaten var olup olmadığını kontrol edin
        const userExist = await User.findOne({ userMail: req.body.userMail })
        if (userExist) {
            res.send({
                "status": false,
                "message": `Başarısız! Kullanıcı, ${userExist.userMail} adresi ile zaten var!`
            });
            return;
        }
        const user = await User.create(req.body);
        res.status(201).json({
            "status": true,
            "message": "Başarılı! Kullanıcı başarıyla oluşturuldu!",
            "user": {
                "userName": user.userName,
                "userMail": user.userMail
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            "status": false,
            "message": "Sunucu hatası"
        });
    }
};

exports.loginUser = async (req, res) => {
    try {
        console.log(req.body);
        const user = await User.findOne({ userMail: req.body.userMail });
        if (user) {
            const cmp = await bcrypt.compare(req.body.userPassword, user.userPassword);
            if (cmp) {
                const token = jwt.sign({
                    userName: user.userName,
                    userMail: user.userMail,
                    userId: user._id,
                }, secureKey, { expiresIn: '1h' })
                res.send({
                    "status": true,
                    "message": "Giriş başarılı!",
                    "token": token,
                    "user": {
                        "userName": user.userName,                      
                    }
                });
            } else {
                res.send({ "status": false, "message": "Yanlış e-posta veya şifre" });
            }
        } else {
            res.send({ "status": false, "message": "Yanlış e-posta veya şifre" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            "status": false,
            "message": "Sunucu hatası"
        });
    }
};

/* 
Bu JWToken testi için yazılmış bir fonksiyon.
*/
exports.test = async (req, res) => {
    res.status(201).send({ message: req.userData.userMail + " - AuthComplate" })
}