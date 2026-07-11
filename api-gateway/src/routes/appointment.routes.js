const express = require("express");
const router = express.Router();
const axios = require("axios");
const config = require("../config/config");
router.get("/", async (req, res,next) => {
  try {
    const response = await axios.get(`${config.appointmentServicePort}/appointmentServicePort`);
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});
module.exports = router;