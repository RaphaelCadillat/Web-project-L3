const dino = require("../model/Dino");

async function getNumberOfUser(req, res){
    console.log("Inside getNumberOfUser")
    const count = await dino.getCount();
    console.log('--' + count)

    res.send({count: count});
}

async function postDetail(req, res){
    const name = req.body.name;
    console.log(name);
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

async function getUserDetail(req, res){
    const id = req.params.id;

    const detail = await dino.getById(id);

    res.send({detail: detail});
}

async function updateDetail(req, res){
    const name = req.body.name;
    const id = req.body.id;

    const isSuccess = await dino.update(id, name);

    res.send({isSuccess: isSuccess});
}

module.exports = {
    getNumberOfUser,
    postDetail,
    deleteDetail,
    getUserDetail,
    updateDetail,
}
