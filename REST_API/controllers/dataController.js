const router = require("express").Router();

const api = require("../services/trainerServices");


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
module.exports = router;
