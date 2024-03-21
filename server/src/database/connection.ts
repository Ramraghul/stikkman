//Require Imports;
import { Sequelize as SequelizeConstructor } from "sequelize";
import chalk from 'chalk';
import dotenv from 'dotenv';
dotenv.config();

// Get database connection URL components from environment variables
const host = process.env.MYSQL_HOST;
const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USERNAME;
const password = process.env.MYSQL_PASSWORD;
const port = process.env.MYSQL_PORT || '3306';


// Check if all required components are provided
if (!host || !database || !username || !password) {
    console.error(chalk.red('Some database connection parameters are missing.'));
    process.exit(1);
}

// Construct the database connection URL
const databaseUrl = `mysql://${username}:${password}@${host}:${port}/${database}`;

// DataBase Connection With MySql Server;
const sequelize = new SequelizeConstructor(databaseUrl, {
    logging: false,
    timezone: '+05:30'
});

// Test the connection
(async () => {
    try {
        await sequelize.authenticate();
        console.log(chalk.green('Connection to the database has been established successfully.'));
    } catch (error) {
        console.error(chalk.red('Unable to connect to the database:', error));
    }
})();

//Connection Export;
export default sequelize;
