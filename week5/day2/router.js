const express = require("express");
const router = express.Router();

router.use(
  (timeLog = (req, res, next) => {
    console.log("Time: ", Date.now());
    next();
  })
);

router.post("/", (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    res.status(422);
    res.json({
      error: "no user id"
    });
    return;
  }

  res.status(201);
  res.json({
    userId: "user-id",
    amount: 10,
    price: 9.99,
    created: new Date().toISOString
  });
});

router.delete("/:id", (req, res) => {
  res.status(204);
  res.end();
});

module.exports = router;
