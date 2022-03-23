const dino = require("../model/Dino");

async function getNumberOfDino(req, res){
    console.log("Inside getNumberOfUser")
    const count = await dino.getCount();
    console.log('--' + count)

    res.send({count: count});
}



async function postDetail(req, res){
    const name = req.body.name;
    const id_users = req.body.id_user;
    const id_dinos = await dino.getCount();
    const carac = req.body.carac;
    const type = req.body.type;
    const size = req.body.size;

    const isSuccess = await dino.create(id_dinos,id_users,name,carac,type,size);
    res.send({isSuccess: isSuccess});
}

async function deleteDetail(req, res){
    const id = req.params.id;

    const isSuccess = await dino.deleteById(id);

    res.send({isSuccess: isSuccess});
}

async function getDinoDetail(req, res){
    const id = req.params.id;

    const detail = await dino.getById(id);

    res.send(detail);
}

async function updateDetail(req, res){
    const name = req.body.name;
    const id = req.body.id;

    const isSuccess = await dino.update(id, name);

    res.send({isSuccess: isSuccess});
}

async function connectUser(req,res){
    const name = req.body.name;
    const password = req.body.password;
    const isSuccess = await dino.getConnect(name,password);

    res.send(isSuccess);

}

async function createUser(req,res){
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const id = await dino.getCountUser();
    const isSuccess = dino.createUser(name,email,password,id);
    res.send({isSuccess: isSuccess});
    }





module.exports = {
    getNumberOfDino,
    postDetail,
    deleteDetail,
    getDinoDetail,
    updateDetail,
    createUser,
    connectUser : connectUser,
}
