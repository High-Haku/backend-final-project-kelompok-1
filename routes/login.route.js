const express = require('express')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const userModels = require('../models/users.model')
const router = express.Router();

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET

router.post('/', async(req, res)=>{
    const {email, password} = req.body

    const user = await userModels.findOne({email: email} && {password: password})

    try {
        if (user) {
          const accessToken = jwt.sign(
            { email: user.email },
            accessTokenSecret
          );
          res.json({
            accessToken,
          });
        } else {
          res.send("Email atau password salah");
        }
      } catch (error) {
          console.log(error);
        res.status(500).send(error);
      }
})

module.exports = router