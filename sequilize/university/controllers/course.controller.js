const { Student, Department } = require("../models");

exports.createStudent = async (req, res) => {
  try {
    const { name, email, departmentId } = req.body;

    const student = await Student.create({ name, email, departmentId });
    res.status(201).json({ message: "Student created", student });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create student" });
  }
};






