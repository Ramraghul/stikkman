//Require Imports;
import { DataTypes } from "sequelize";
import sequelize from '../database/connection';

// Model Definition:
const Course = sequelize.define(
    'course_table',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            autoIncrement: true,
            primaryKey: true
        },
        thumbnail: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    },
    {
        collate: "utf8mb4_general_ci",
        timestamps: false,
        tableName: "course_table"
    }
);

//Connection Export;
export default Course;
