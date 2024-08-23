const express = require('express');
const router = express.Router();
const authenticateToken = require("../middlewares/auth");


const { getcourses, getcourse, createcourse ,updatecourse, deletecourse } = require ("../controller/courseController");

router.get("/courses",authenticateToken,getcourses);
router.get("/course/:id", authenticateToken,getcourse);
router.post("/course", authenticateToken,createcourse);
router.put("/course/:id", authenticateToken,updatecourse);
router.delete("/course/:id", authenticateToken,deletecourse);


module.exports = router;



