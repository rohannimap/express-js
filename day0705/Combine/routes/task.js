const express = require("express")
const taskRoute = require("../controllers/task")
const router = express.Router();

router.post("/task",taskRoute.createTask)
router.get("/task",taskRoute.getAllTask)
router.put("/task/:id",taskRoute.upDateTask)
router.delete("/task/:id",taskRoute.deleteTask)



module.exports = router