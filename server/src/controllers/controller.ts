//Require Imports;
import { Request, Response } from 'express';
import Course from '../model/courseTable';
import { Op } from 'sequelize';


//Course Controller;
const courseController = {

    //Create New Course Or Update Existing Course;
    async createNewCourse(req: Request, res: Response) {
        try {
            const inData = req.validBody;
            // create a new course
            await Course.create({ ...inData, createdAt: new Date() });

            return res.status(201).json({
                status: true,
                message: 'New Course Created Successfully',
            });
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    //Course Update By Id;
    async updateCourseById(req: Request, res: Response) {
        try {

            const id: number = parseInt(req.query.id as string);

            const existingCourse = await Course.findByPk(id);

            if (!existingCourse) {
                return res.status(404).json({
                    status: false,
                    error: 'Course not found'
                });
            }

            await existingCourse.update({ ...req.validBody, createdAt: new Date() });

            return res.status(200).json({
                status: true,
                message: 'Course updated successfully',
            });

        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    //Get All Course List;
    async getAllCourseList(req: Request, res: Response) {
        try {
            const finalData: Array<any> = await Course.findAll();
            if (!finalData) {
                return res.status(400).json({
                    status: false,
                    message: 'No Course Data Founded',
                });
            } else {
                return res.status(200).json({
                    status: true,
                    message: 'Course List Fetched successfully',
                    data: finalData
                });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    //Get Course By Id;
    async getCourseById(req: Request, res: Response) {
        try {
            const id: number = parseInt(req.query.id as string);

            const finalData = await Course.findByPk(id);

            if (!finalData) {
                return res.status(400).json({
                    status: false,
                    message: 'No Course Data Founded',
                });
            } else {
                return res.status(200).json({
                    status: true,
                    message: 'Course Fetched successfully',
                    data: finalData
                });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    //Course Get By Authors;
    async getCourseByAuthor(req: Request, res: Response) {
        try {
            const author: string = (req.query.author as string);

            const coursesByAuthor = await Course.findAll({
                where: {
                    author: {
                        [Op.like]: `%${author}%`
                    }
                }
            });

            if (!coursesByAuthor || coursesByAuthor.length === 0) {
                return res.status(404).json({
                    status: false,
                    message: 'No Courses Found for the Author',
                });
            } else {
                return res.status(200).json({
                    status: true,
                    message: 'Courses by Author Fetched Successfully',
                    data: coursesByAuthor
                });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    //Course Delete By Id;
    async deleteCourseById(req: Request, res: Response) {
        try {
            const id: number = parseInt(req.query.id as string);

            const existingCourse = await Course.findByPk(id);

            if (!existingCourse) {
                return res.status(404).json({
                    status: false,
                    error: 'Course not found'
                });
            }

            await existingCourse.destroy({ force: true });

            return res.status(200).json({
                status: true,
                message: 'Course Deleted successfully',
            });

        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' })
        }
    }
}


//Connection Export;
export default courseController;
