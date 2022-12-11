const router = require("express").Router();
const preload = require("../middlewares/preload");
const api = require("../services/trainerServices");
const userApi = require("../services/userServices");
const orderApi = require("../services/orderServices");

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
    desc: req.body.desc,
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
router.get("/my-data/:id", async (req, res) => {
  try {
    let orders = await userApi.getUserData(req.params.id);
    let history = orders.orderHistory;

    res.json({ history: history });
  } catch (err) {
    res.status(400).json({ message: "Request error" });
  }
});
router.post("/my-data", async (req, res) => {
  const item = {
    name: req.body.name,
    title: req.body.title,
    training: req.body.training,
    imageUrl: req.body.imageUrl,
    email: req.body.email,
    phone: req.body.tel,
    breed: req.body.breed,
    age: Number(req.body.age),
    price: Number(req.body.price),
    gender: req.body.gender,
    desc: req.body.desc,
    _ownerId: req.user._id,
  };

  try {
    let result = await orderApi.createData(item);

    res.status(201).json({ result });
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
    console.log(error);
  }
});

router.delete("/my-data/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id, "ok delete");
  try {
    const result = await orderApi.deleteData(id);
    res.json({ result });
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: `Item ${id} not found` });
  }
});
module.exports = router;
