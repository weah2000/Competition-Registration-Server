const express = require('express');
const _ = require('lodash');
const router = express.Router();
const Users = require('../models/Users');

// @route     POST /api/url/shorten
// @desc      Create short Users
router.post('/', async (req, res) => {
  const { userName,phone,idCard,server,gameId,teamName,status } = req.body;
  if(_.isNil(userName)) return res.status(201).json({resCode:"201",resMsg:"找不到姓名"});
  if(_.isNil(phone)) return res.status(201).json({resCode:"201",resMsg:"找不到手机号"});
  if(_.isNil(idCard)) return res.status(201).json({resCode:"201",resMsg:"找不到身份证号"});
  if(_.isNil(server)) return res.status(201).json({resCode:"201",resMsg:"找不到游戏服务区"});
  if(_.isNil(gameId)) return res.status(201).json({resCode:"201",resMsg:"找不到游戏ID"});
  if(_.isNil(teamName)) return res.status(201).json({resCode:"201",resMsg:"找不到战队名称"});
  try {
    let checkRes = await Users.findOne({ gameId });

    if (checkRes) {
      res.status(201).json({resCode:"201",resMsg:"此游戏ID已存在"});
    } else {
      let data = new Users({
        userName,
        phone,
        idCard,
        server,
        gameId,
        teamName,
        status,
        date: new Date().getTime()
      });

      await data.save();
      res.json({resCode:"200",resMsg:"注册成功"});
    }
  } catch (err) {
    res.status(500).json({resCode:"500",resMsg:"注册异常: "+ JSON.stringify(err)});
  }
});

module.exports = router;
