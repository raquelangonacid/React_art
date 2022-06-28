const Painting = require("../models/painting.model")
const HTTPSTATUSCODE = require("../../utils/httpstatuscode");

const getAllPaintings = async (req, res, next) => {
    try {
      const painting = await Painting.find();
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: {painting: painting},
      });
    } catch (error) {
      return next(error);
    }
  };
  

  const getPaintingByID = async (req, res, next) => {
    try {
      const id = req.params.id;
      const paintingByID = await Painting.findById(id);
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: {paintingByID: paintingByID},
      });
    } catch (error) {
      return next(error);
    }
  };
  
  
  const createPainting = async (req, res, next) => {
    try {
      const newPainting = new Painting(req.body);
      const createdPainting = await newPainting.save();
      return res.json({
        status: 201,
        message: HTTPSTATUSCODE[201],
        data: { newAPainting: newPainting },
      });
    } catch (error) {
      return next(error);
    }
  };
  
  const deletePainting = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedPainting = await Painting.findByIdAndDelete(id);
      return res.status(200).json(deletedPainting);
  
    } catch (error) {
      return res.status(500).json(error)
    }
  
  };
  
  module.exports = { getAllPaintings, getPaintingByID, createPainting, deletePainting };