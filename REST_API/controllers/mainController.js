const router = require("express").Router();


router.get("/", async (req, res) => {
  try {
    let data = await comicServices.getAllComics();

    //res.json(data);
  } catch (error) {
   // res.status(400).json({ message: "Bad request" });
  }
});

module.exports = router;