const express = require('express');
const router = express.Router();
const Category = require('../schema/Skill');

router.post('/',async(req,res)=>{
        try {
            const newSkill = new Skill({
                course_id:req.body.course_id,
                category_id:req.body.category_id,
                skills:req.body.skills
            });
            const skill = await newSkill.save();
            res.json(skill);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
})
router.get('/',async(req,res)=>{
    try {
        const skill = await Skill.find({});
        res.json(skill);
        // res.send("category success");
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports=router;