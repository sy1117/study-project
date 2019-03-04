import express from 'express';
import account from './account';
import memo from './memo';
import drama from './drama';
import comment from './comment';

const router = express.Router();
router.use('/account', account);
router.use('/memo', memo);
router.use('/drama', drama);
router.use('/comment', comment)

export default router;
