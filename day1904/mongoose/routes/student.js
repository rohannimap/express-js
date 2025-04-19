const express = require("express")
const router = express.Router()
const student = require("../controllers/student")



router.post("/student",student.createSudent)
router.get("/student",student.getStudent)
router.get("/student/:name",student.getStudentById)
router.get("/student/test/query/:agen",student.checkage)
router.get("/student/test/logical",student.logicalOperator)
router.put("/student/:id",student.updateStudent)



module.exports = router