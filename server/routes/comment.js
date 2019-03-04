import express from 'express';
import CommentModel from '../models/comment';

const router = express.Router();

router.post('/save', (req, res) => {

    let cmtData = req.body.commentObj
    
    let saveComment = new CommentModel({
        dramaId: cmtData.dramaId,
        comment: cmtData.comment,
        userId: "admin",
        star: cmtData.clickedStar

    });

    saveComment.save(
        err=>{
        if(err) throw err;
        return res.json(true);
        }
    )

});

router.post('/get', (req, res) => {

    const {dramaId}  = req.body;
    //console.log(cmtData)
    
    CommentModel.find({"dramaId":dramaId})
                .sort({created: 1})
                .exec((err, data) => {
                    if(err) throw err;
                    //console.log(">>>>>>>>>>>>>",data);
                    let cnt = data.length;
                    let sum = 0;
                    if(cnt==0) {}
                    else {
                        for(var i=0; i<cnt; i++){
                            sum = sum + data[i].star;
                        }
                        
                    }
                    return res.json({
                            data, 
                            average: cnt == 0 ? 0 : (sum/cnt)
                        });
                });


});



export default router;
