const router = require("express").Router();
const preload = require("../middlewares/preload");
const api = require("../services/trainerServices");

router.get("/", async (req, res) => {
  try {
    let data = await api.getAllTrainers();

    res.json(data);
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
});
router.post("/", async (req, res) => {
  const item = {
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    year: req.body.year,
  };
  try {
    let result = await api.createData(item);
    res.status(201).json({ result });
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
    console.log(error);
  }
});
router.get("/course", async (req, res) => {
  try {
    let data = await api.getAllCourses();

    res.json(data);
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
});
router.post("/course", async (req, res) => {
  const item = {
    title: req.body.title,
    training: req.body.training,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    desc: req.body.desc
  };
  try {
    let result = await api.createCours(item);
    res.status(201).json({ result });
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
    console.log(error);
  }
});
router.get("/course/:id", preload(api), async (req, res) => {
  res.json(res.locals.item);
});

module.exports = router;
