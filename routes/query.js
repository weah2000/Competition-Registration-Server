const express = require('express');
const _ = require('lodash');
const router = express.Router();
const Users = require('../models/Users');

// @route     POST /api/url/shorten
// @desc      Create short Users
router.post('/', async (req, res) => {
  const { userName,phone,idCard,server,gameId,teamName,status } = req.body;
  let query = {};
  if(userName) query.userName = userName;
  if(phone) query.phone = phone;
  if(idCard) query.idCard = idCard;
  if(server) query.server = server;
  if(gameId) query.gameId = gameId;
  if(teamName) query.teamName = teamName;
  if(status) query.status = status;
  try {
    const data = await Users.find(query);

    if (data) {
      return res.json({
        resCode:'200',
        resMsg:'查询成功',
        data
      });
    } else {
      return res.status(404).json({
        resCode:'404',
        resMsg:'未找到此游戏账号'
      });
    }
  } catch (err) {
    res.status(500).json({
      resCode:"500",
      resMsg:"查询异常: "+JSON.stringify(err)
    });
  }
});

module.exports = router;