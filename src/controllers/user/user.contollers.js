import { deleteUser, getUsers } from "../../services/user/user.services.js";

async function httpGetUsers(_,res){
    res.status(200).json(await getUsers());
} 
async function httpDeleteUser(req,res){
    res.status(200).json(await deleteUser(req.params.id));
}


export {
    httpDeleteUser,
    httpGetUsers,
}