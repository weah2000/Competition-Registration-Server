const express = require('express');
const router = express.Router();
const Users = require('../models/Users');

router.post('/', async (req, res) => {
  const { _id,status } = req.body;
  try {
    let resData = await Users.findById(_id);
    if (resData) {
      resData.status = status;
      await resData.save();
      res.json({resCode:"200",resMsg:"操作成功"});
    } else {
      res.status(201).json({resCode:"201",resMsg:"无法查找此人,无法修改状态"});
    }
  } catch (err) {
    res.status(500).json({resCode:"500",resMsg:"注册异常: "+ JSON.stringify(err)});
  }
});

module.exports = router;
