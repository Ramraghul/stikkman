// Required Package Import;
import axios from 'axios';
import { getCourse, getCourseByAuthor, getCourseById } from '../reducers/reducer';

//API Actions;
//Fetch All Course;
export const fetchCourse = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:9000/api/v1/getAllCourses`);
            dispatch(getCourse(response.data.data))
        } catch (error) {
            console.error(error.message);
        }
    };
};

//Course Get By Id;
export const fetchCourseById = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:9000/api/v1/getCourseById?id=${id}`);
            dispatch(getCourseById(response.data.data))
        } catch (error) {
            console.error(error.message);
        }
    };
};

//Course Get By Id;
export const deleteCourseById = (id) => {
    return async () => {
        try {
            await axios.delete(`http://localhost:9000/api/v1/deleteCourseById?id=${id}`);
        } catch (error) {
            console.error(error.message);
        }
    };
};


//Course Get By Author;
export const fetchCourseByAuthor = (Author) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:9000/api/v1//courses/filter-by-authors?author=${Author}`);
            dispatch(getCourseByAuthor(response.data.data))
        } catch (error) {
            console.error(error.message);
        }
    };
};
