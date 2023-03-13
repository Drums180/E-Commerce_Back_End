const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection'); 
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// establish connection to database
sequelize.authenticate()
  .then(() => console.log('Connection to database successful!'))
  .catch((error) => console.error('Unable to connect to the database:', error));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
