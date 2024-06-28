const express = require("express")

const adminRoute = require("./admin.routes")

const router = express.Router()

router.use("/admin",adminRoute)

module.exports = router