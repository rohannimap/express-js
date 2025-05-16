const { Student, Course } = require("../models");

exports.getStudentCourses = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByPk(id, {
      include: {
        model: Course,
        through: { attributes: ["grade"] }
      }
    });

    if (!student) return res.status(404).json({ message: "Student not found" });

    res.json(student);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch courses", error: err.message });
  }
};
