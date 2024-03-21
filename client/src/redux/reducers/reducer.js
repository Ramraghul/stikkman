// Required Package Import
import { createSlice } from '@reduxjs/toolkit';

// InitialValue;
const initialState = {
    AllCourses: [],
    viewCourse: {},
    loading: true,
};

// Reducer Mention;
const courseReducer = createSlice({
    name: 'course',
    initialState,
    reducers: {
        // Get All Course Reducer;
        getCourse: (state, action) => {
            state.AllCourses = action.payload;
            state.loading = false;
        },
        // Get Course By Id;
        getCourseById: (state, action) => {
            state.viewCourse = action.payload;
            state.loading = false;
        },
        // Get Course By Author;
        getCourseByAuthor: (state, action) => {
            state.AllCourses = action.payload; 
            state.loading = false;
        },
    },
});

// Mention All The Reducer In CourseReducer;
export const { getCourse, getCourseById, getCourseByAuthor } = courseReducer.actions;

// Reducer Export;
export default courseReducer.reducer;
