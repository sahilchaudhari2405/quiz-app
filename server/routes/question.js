const express=require('express');
const router =express.Router();
const {handleAddQuestion}=require('../controllers/question');
router.post('/question',handleAddQuestion);
module.exports=router;