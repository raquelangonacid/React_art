const express = require("express");
const router = express.Router();
const { isAuth } = require("../../middleware/auth.middleware");

const {
    getAllPainters,
    getPainterByID,
    createPainter,
    deletePainter
} = require("../controllers/painter.controllers");

router.get("/", getAllPainters);
router.get("/:id", getPainterByID);
router.post("/", createPainter);
router.delete("/:id", deletePainter);

module.exports = router;