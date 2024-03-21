//Require Imports;
import express from "express";
import courseController from "../controllers/controller";
import validation from "../validation/validation";
import { validateCreateCourse, validateUpdateCourse } from "../validation/courseValidation";
const route = express.Router();

//All Routes;
//Create New Course;
route.post('/createNewCourse', validation(validateCreateCourse), courseController.createNewCourse);


//Update Course By Id;
route.put('/updateCourseById', validation(validateUpdateCourse), courseController.updateCourseById);


//Get All Course List;
route.get('/getAllCourses', courseController.getAllCourseList);


//Get Course By Id;
route.get('/getCourseById', courseController.getCourseById);


//Delete Course By Id;
route.delete('/deleteCourseById', courseController.deleteCourseById);


//Get Course By authors;
route.get('/courses/filter-by-authors', courseController.getCourseByAuthor)

//Connection Export;
export default route;