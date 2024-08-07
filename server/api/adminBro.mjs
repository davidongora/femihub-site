import express from 'express';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import { Sequelize, DataTypes } from 'sequelize';


const sequelize = new Sequelize('femihub_femihub_db', 'femihub_femihub', '$6H-ksQ,M&)*', {
  host: '45.56.98.224',
  dialect: 'mysql',
  define: {
    freezeTableName: true
  }
});

sequelize.authenticate()
  .then(() => console.log('Connection to MySQL has been established successfully.'))
  .catch(err => console.error('Unable to connect to MySQL:', err));

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

const Products = sequelize.define('products', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true 
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fabric: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pack: {
    type: DataTypes.STRING,
    allowNull: false
  },
  style: {
    type: DataTypes.STRING,
    allowNull: false
  },
  created_at: {
    type: DataTypes.STRING,
    allowNull: false
  },
  updated_at: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});


const Appointments = sequelize.define('appointments', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  appointment_reason: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  timestamps: false, // No timestamp fields in the SQL schema
});

const Articles = sequelize.define('articles', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  author_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  timestamps: false, // No timestamp fields in the SQL schema
});

const Categories = sequelize.define('categories', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false, // No automatic timestamp fields
});

const Chats = sequelize.define('chats', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  timestamps: false, // No timestamp fields in the SQL schema
});

const Consultations = sequelize.define('consultations', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  reason: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false, // No automatic timestamp fields
});

const Doctors = sequelize.define('doctors', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  specialty: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: false, // No timestamp fields in the SQL schema
});

const Experiences = sequelize.define('experiences', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: false, // No timestamp fields in the SQL schema
});

const Favorites = sequelize.define('favorites', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false, // No automatic timestamp fields
});

const ForumPosts = sequelize.define('forum_posts', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: false, // No timestamp fields in the SQL schema
});

const Orders = sequelize.define('orders', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  total_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  timestamps: false, // No timestamp fields in the SQL schema
});

const OrderItems = sequelize.define('order_items', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  timestamps: false, // No timestamp fields in the SQL schema
});

const Payments = sequelize.define('payments', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
}, {
  timestamps: false, // No timestamp fields in the SQL schema
});

const Periods = sequelize.define('periods', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  start_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  end_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
}, {
  timestamps: false, // No timestamp fields in the SQL schema
});

const PeriodTracker = sequelize.define('period_tracker', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  regular_periods: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  period_days: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  last_period_date: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false, // No automatic timestamp fields
});

// Sync models with the database
sequelize.sync({ alter: true }) // This will update the table structure if needed
  .then(() => console.log('Database synchronized'))
  .catch(err => console.error('Error synchronizing database:', err));

// Register Sequelize adapter
AdminJS.registerAdapter(AdminJSSequelize);

const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: '/femihub/admin',
  resources: [
    { resource: User, options: {} },
    { resource: Products, options: {} },
    { resource: Appointments,  options: {} },
    { resource: OrderItems,  options: {} },
    { resource: Payments,  options: {} },
    { resource: Periods,  options: {} },
    { resource: PeriodTracker,  options: {} },
    { resource: OrderItems,  options: {} },
    { resource: Payments,  options: {} },
    { resource: Periods,  options: {} },
    { resource: Articles,  options: {} },
    { resource: Categories,  options: {} },
    { resource: Chats,  options: {} },
    { resource: Consultations,  options: {} },
    { resource: Doctors,  options: {} },
    { resource: Favorites,  options: {} },
    { resource: ForumPosts,  options: {} },
    { resource: Orders,  options: {} },
    { resource: Experiences,  options: {} },

    
  ],
  branding: {
    companyName: 'Femihub',
    softwareBrothers: true,
    logo: true,
    stylesheet: './adminBro.css', 
  },
})

const adminJsRouter = AdminJSExpress.buildRouter(adminJs);

adminJsRouter.use((req, res, next) => {
  res.locals.stylesheet = './adminBro.css';
  next();
});



// Build and use the router
const router = AdminJSExpress.buildRouter(adminJs);
const app = express();
// app.use(adminJs.options.rootPath, router);
app.use(adminJs.options.rootPath, adminJsRouter);

app.listen(3000, () => console.log('Server started on port 3000'));