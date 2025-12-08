const express = require("express")
const router = express.Router();

router.post("availability/check")
router.post("availability/block")
router.get("availability/resource/:id")

module.exports = router;