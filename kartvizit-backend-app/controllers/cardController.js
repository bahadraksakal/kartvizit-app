const Card = require("../models/Card");


exports.getCards = async (req, res) => {
    try {
        //console.log("getCards çalıştı");
        const userId=req.userData.userId;
        const cards = await Card.find({userId: userId});
        //console.log(cards);
        res.status(200).json({
        status: true,
        data: cards,
        message: "Kartlar başarıyla alındı",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            "status": false,
            "message": "Sunucu hatası  friendsController - getFriends"
        });
    }
};

exports.addCards = async (req, res) => {
    try {
        //console.log("createMessage çalıştı.");  
        //console.log(req);
        //console.log("gelen veri:"+req.body.email);    
        const userId=req.userData.userId;   
        const name=req.body.name;
        const title=req.body.title;
        const phone=req.body.phone;        
        const email=req.body.email;
        const address=req.body.address;
        await Card.create({
            name: name,
            title: title,
            phone: phone,
            email: email,
            address: address,
            userId: userId
        });
        res.status(201).json({
            "status": true,
            "message": " Card başarıyla eklendi! İşlem Başarılı!"
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            "status": false,
            "message": "Sunucu hatası! cardController - addCard! İşlem Başarısız!"
        });
    }
};

exports.updateCards = async (req, res) => {
    try {
        //console.log("gelen veri:"+req.body.email);  
        //console.log("gelen veri:"+req.params.cardId);  
        const cardId = req.params.cardId;
        const updatedCard = req.body;
        const userId=req.userData.userId;
        await Card.findByIdAndUpdate({_id:cardId,userId:userId}, updatedCard);
        //hem card id , hem card ın userId bakılcak
        res.status(201).json({
            "status": true,
            "message": " Card başarıyla Güncellendi! İşlem Başarılı!"
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            "status": false,
            "message": "Sunucu hatası! cardController - updateCard! İşlem Başarısız!"
        });
    }
};

exports.deleteCards = async (req, res) => {
    try {
        //console.log("gelen veri:"+req.body.email);  
        //console.log("gelen veri:"+req.params.cardId);  
        const userId=req.userData.userId;
        const cardId = req.params.cardId;
        await Card.findByIdAndRemove({_id:cardId,userId:userId});
        //hem cardId hem card ın userId bakılcak
        res.status(201).json({
            "status": true,
            "message": " Card başarıyla Silindi! İşlem Başarılı!"
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            "status": false,
            "message": "Sunucu hatası! cardController - deleteCard! İşlem Başarısız!"
        });
    }
};
