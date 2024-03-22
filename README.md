# Stikkman

This Task For Stikkman.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Ramraghul/stikkman.git
    ```

2. Navigate to the server directory:
    ```bash
    cd ./server
    ```

3. Install server dependencies:
    ```bash
    yarn install
    ```

4. Navigate to the client directory:
    ```bash
    cd ../client
    ```

5. Install client dependencies:
    ```bash
    yarn install
    ```

## Usage

1. Start the server:
    ```bash
    cd ../server
    yarn start or nodemon
    ```

2. Start the client:
    ```bash
    cd ../client
    yarn start
    ```

3. Access the client application at `http://localhost:3000`.
4. Access the server application at `http://localhost:9000`.

## API Detail

### Create New Course
- Endpoint: `http://localhost:9000/api/v1/createNewCourse`
- Method: POST
- Description: This endpoint is used to create a new course.
- Request Body: JSON
    ```json
    {
        "thumbnail": "https://images.unsplash.com/photo-1563874257547-d19fbb71b46c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name": "Night",
        "author": "Rowdy",
        "description": "This is My Night Mood"
    }
    ```

### Update Course By ID
- Endpoint: `http://localhost:9000/api/v1/updateCourseById?id=1`
- Method: PUT
- Description: This endpoint is used to update a course by its ID.
- Request Body: JSON
    ```json
    {
        "name": "YouTube"
    }
    ```

### Get All Courses
- Endpoint: `http://localhost:9000/api/v1/getAllCourses`
- Method: GET
- Description: This endpoint retrieves all courses.

### Delete Course By ID
- Endpoint: `http://localhost:9000/api/v1/deleteCourseById?id=5`
- Method: DELETE
- Description: This endpoint is used to delete a course by its ID.

### Get Courses Filtered by Author
- Endpoint: `http://localhost:9000/api/v1/courses/filter-by-authors?author=ul`
- Method: GET
- Description: This endpoint retrieves courses filtered by author.

## Contact

For any inquiries or feedback, please contact [Raghul](mailto:raghulraghul111@gmail.com).
