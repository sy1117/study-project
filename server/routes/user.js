import express from 'express';
import UserModel from '../models/user';

const router = express.Router();


router.post('/check', (req, res) => {

    const {id,pw}  = req.body;
    //console.log(cmtData)
    
    UserModel.find({"userId":id, "password":pw})
             .exec((err,result)=>{
                 if(err) throw err;

                 if(result.length == 1){
                     return res.json(true);
                 }else{
                     return res.json(false);
                 }

         });


});


export default router;
