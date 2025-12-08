const express = require("express")
const router = express.Router();

router.post("notifications/send")
router.post("notifications/batch")
router.get("notifications/user/:id")

module.exports = router;