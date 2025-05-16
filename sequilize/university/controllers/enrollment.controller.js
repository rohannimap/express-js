const { Enrollment } = require("../models");

exports.enrollStudent = async (req, res) => {
  try {
    const { studentId, courseIds } = req.body;

    const enrollments = await Promise.all(courseIds.map(courseId =>
      Enrollment.create({ studentId, courseId })
    ));

    res.status(201).json({ message: "Student enrolled", enrollments });
  } catch (err) {
    res.status(500).json({ message: "Enrollment failed", error: err.message });
  }
};
