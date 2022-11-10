const router = require("express").Router();
const mainController = require("../controllers/mainController");
const trainerControler=require("../controllers/dataController")

router.use("/api/", mainController);
router.use("/api/trainer", trainerControler);

router.use("*", (req, res) => {});
module.exports = router;
