const express = require("express");

const { transferController } = require("../controllers/transfer.js");

const router = express.Router();

router.post("/", transferController);

module.exports = router;
