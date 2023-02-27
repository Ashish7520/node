const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors')

const { Sequelize, DataTypes } = require('sequelize');

// create sequelize instance
const sequelize = new Sequelize('node-complete', 'root', 'Ashish@2000', {
  host: 'localhost',
  dialect: 'mysql'
});

// define User model
const Demo = sequelize.define('demo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  mobile: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false
  }
});

// sync the User model with the database
sequelize.sync().then(() => {
  console.log('User table created successfully!');
}).catch(err => {
  console.log('Error while creating User table:', err);
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())


// Add a new user
app.post('/user/add-user', async (req, res) => {
  const { name, email, mobile } = req.body;

  try {
    const user = await Demo.create({ name, email, mobile });
    res.json({ message: 'User added successfully!', user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error adding user.' });
  }
});

// Get all users
app.get('/user/get-user', async (req, res) => {
  try {
    const users = await Demo.findAll();
    res.json(users);
  } catch (error) {
    console.log('Error while getting users:', error);
    res.status(500).json({ message: 'Error while getting users' });
  }
});

// Delete a user by ID

app.delete('/user/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Demo.destroy({ where: { id:id } });
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

// app.delete('/user/delete-user/:id', async (req, res) => {
//   const id = req.params.id;

//   try {
//     const user = await Demo.findByPk(id);
//     if (!user) {
//       res.status(404).json({ message: 'User not found.' });
//     } else {
//       await Demo.destroy();
//       res.json({ message: 'User deleted successfully!', user });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: 'Error deleting user.' });
//   }
// });



app.listen(5501, () => console.log('Server running on port 5501'));
