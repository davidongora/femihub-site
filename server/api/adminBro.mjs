import express from 'express';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import { Sequelize, DataTypes } from 'sequelize';


// Initialize Sequelize
const sequelize = new Sequelize('femihub_femihub_db', 'femihub_femihub', '$6H-ksQ,M&)*', {
  host: '45.56.98.224',
  dialect: 'mysql',
  define: {
    freezeTableName: true // This option prevents Sequelize from pluralizing table names
  }
});

// Test the connection
sequelize.authenticate()
  .then(() => console.log('Connection to MySQL has been established successfully.'))
  .catch(err => console.error('Unable to connect to MySQL:', err));

// Define the User model
const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: true // This field can be null
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

// Sync models with the database
sequelize.sync({ alter: true }) // This will update the table structure if needed
  .then(() => console.log('Database synchronized'))
  .catch(err => console.error('Error synchronizing database:', err));

// Register Sequelize adapter
AdminJS.registerAdapter(AdminJSSequelize);

const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: '/admin',
  resources: [
    { resource: User, options: {} }, // Add your models here
    // { resource: products, options: {} }, // Add your models here

  ],
});

// Build and use the router
const router = AdminJSExpress.buildRouter(adminJs);
const app = express();
app.use(adminJs.options.rootPath, router);

app.listen(3000, () => console.log('Server started on port 3000'));