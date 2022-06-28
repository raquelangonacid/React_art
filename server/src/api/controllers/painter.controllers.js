const Painter = require("../models/painter.model")
const HTTPSTATUSCODE = require("../../utils/httpstatuscode");

const getAllPainters = async (req, res, next) => {
  try {
    const painter = await Painter.find();
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: { painter: painter },
    });
  } catch (error) {
    return next(error);
  }
};

const getPainterByID = async (req, res, next) => {
    try {
      const id = req.params.id;
      const painterByID = await Painter.findById(id);
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: {painterByID: painterByID},
      });
    } catch (error) {
      return next(error);
    }
  };

const createPainter = async (req, res, next) => {
  try {
    const newPainter = new Painter(req.body);
    const createdPainter = await newPainter.save();
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: { newAPainter: newPainter },
    });
  } catch (error) {
    return next(error);
  }
};

const deletePainter = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedPainter = await Painter.findByIdAndDelete(id);
      return res.status(200).json(deletedPainter)
  
    } catch (error) {
      return res.status(500).json(error)
    }
  
  };
  

module.exports = { getAllPainters, getPainterByID, createPainter, deletePainter };