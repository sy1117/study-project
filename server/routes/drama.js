import express from 'express';
import Drama from '../models/drama';
import mongoose from 'mongoose';


const router = express.Router();

router.get('/', (req, res) => {
    Drama.find({},function (err, dramas) {
        if (err) return console.error(err);
        else res.status(200).json(dramas);
    })
});


router.get('/:id', (req, res) => {
    Drama.findOne({_id: req.params.id}, (err, drama) => {
        if (err) throw err;
        if(drama){
            return res.status(200).json(drama)
        }
    });

});


export default router;
