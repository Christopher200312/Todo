const chris = require("mongoose");
const userModel = require("../model/usemodel");

// GET ALL SET07

const getallset07 = async (req, res) => {
  try {
    const allstudent = await userModel.find();
    res.status(200).json({
      message: "gotten all user",
      data: allstudent,
    });
  } catch (erroor) {
    res.status(404).json({
      message: "conldn't get all student",
    });
  }
};

// create all student

const createalluser = async (req, res) => {
  try {
    const { name, instructors, gender, classrep, population } = req.body;
    const alluser = await userModel.create({
      name,
      instructors,
      gender,
      classrep,
      population,
    });
    res.status(200).json({
      message: "create new student",
      data: alluser,
    });
  } catch (erroor) {
    res.status(404).json({
      message: "couldn't create user",
    });
  }
};
