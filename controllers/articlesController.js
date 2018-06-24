const db = require("../models");

module.exports ={ 
findAll:function(req, res){
    db.Article
        .find(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

},//find all

}//module exports