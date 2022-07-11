import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('Users', 'postgres', 'Srivani@123', {
    host: 'localhost',
    dialect: 'postgres'
});
