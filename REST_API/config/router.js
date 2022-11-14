const router = require("express").Router();
const authController = require("../controllers/authController");
const trainerControler=require("../controllers/dataController")

router.use("/api/auth", authController);
router.use("/api/trainer", trainerControler);

router.use("*", (req, res) => {});
module.exports = router;
