import express from 'express';
import account from './account';
import memo from './memo';
import drama from './drama';


const router = express.Router();
router.use('/account', account);
router.use('/memo', memo);
router.use('/drama', drama);

export default router;
