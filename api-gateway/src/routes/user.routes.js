const express = require("express");
const axios = require("axios");
const router = express.Router();
const config = require("../config/config");
router.get("/", async (req, res,next) => {
  try {
    const response = axios.get({
            url:`${config.user_service}/user`,
            headers:{
                    "Content-Type":"application/json"
                }
    });
    res.json(response);
  } catch (error) {
    next();
  }

});
module.exports=router;