const express = require("express");
const router = express.Router();
const { isAuth } = require("../../middleware/auth.middleware");

const {
  getAllPaintings,
  getPaintingByID,
  createPainting,
  deletePainting,
} = require("../controllers/painting.controllers");

router.get("/", getAllPaintings);
router.get("/:id", getPaintingByID);
router.post("/", [isAuth], createPainting);
router.delete("/:id", deletePainting);

module.exports = router;