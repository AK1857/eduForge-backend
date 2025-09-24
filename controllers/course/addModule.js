const { isValidObjectId } = require("mongoose");
const Course = require("../../models/course");


const addModule = async (req, res) => {
    try {
        let payload = req.body;
        let courseId = req.params.courseId;
        let course = await Course.findOne({ _id:courseId });

        if (!course) {
            res.status(404).json({ "message": "Course not found" })
        }

        course.modules.push({ ...payload });
        await course.save();

        res.status(200).json({
            message: 'Module added successfully',
            courseId: course._id,
            updatedModulesCount: course.modules.length
        });

    } catch (error) {
        res.status(500).json({
            "message": "Internal server error",
            "info": error.message
        })
    }
}

module.exports = addModule;