const express = require('express');
const router = express.Router();
const Course = require('../schema/Course');

router.post('/',async(req,res)=>{
        try {
            const newCourse = new Course({
                category_id:req.body.category_id,
                course_id:req.body.course_id,
                category:req.body.category,
                difficultylevel:req.body.difficultylevel,
                thumbnail:req.body.thumbnail,
                title:req.body.title,
                rating:req.body.rating,
                timing:req.body.timing,
                amount:req.body.amount,
                noofstudents:req.body.noofstudents,
                noofstudents_rated:req.body.noofstudents_rated,
                thumbnail_desc:req.body.thumbnail_desc,
                description:req.body.description,
                lessons:req.body.lessons,

            });
            const course = await newCourse.save();
            res.json(course);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
})
router.get('/',async(req,res)=>{
    try {
        const course = await Course.find({});
        res.json(course);
        // res.send("course success"); 
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports=router;