# 13 E-Commerce Back End

This is an Express.js API for an E-Commerce website. The API uses Sequelize to connect to a MySQL database and provide functionality to manage categories, products, and tags.

## Installation

To install the necessary dependencies, run the following command:

```
npm install
```

## Usage

Before running the application, create an .env file in the root directory and add your MySQL database name, username, and password:

```
DB_NAME='ecommerce_db'
DB_USER='your_mysql_username'
DB_PW='your_mysql_password'
```
To create the database and seed it with test data, run the following command:

```
npm run seed
```

To start the application, run the following command:

```
npm start
```

## Criteria 1: Connect to a database using Sequelize
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file, THEN I am able to connect to a database using Sequelize.
To connect to the database using Sequelize, the application reads the database name, username, and password from environment variables. Here is an example of how this is done in the config/connection.js file:

```
require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
      }
    );

module.exports = sequelize;
```

## Criteria 2: Create a development database and seed it with test data
WHEN I enter schema and seed commands, THEN a development database is created and is seeded with test data.
The application uses Sequelize migrations to create and update the database schema, and Sequelize seeders to insert test data into the database. Here is an example of how to run the migrations and seeders:

```
# To run the seeders
npm run seed
```

## Criteria 3: Sync Sequelize models to the MySQL database
WHEN I enter the command to invoke the application, THEN my server is started and the Sequelize models are synced to the MySQL database.
The application uses the following code in server.js to start the server and sync the Sequelize models with the MySQL database:

```
const sequelize = require('./config/connection');

// ...

// Sync sequelize models to the database, then start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
```


## Criteria 4: Display data for each route in a formatted JSON
WHEN I open API GET routes in Insomnia for categories, products, or tags, THEN the data for each of these routes is displayed in a formatted JSON.
The application provides GET routes for categories, products, and tags. When a GET request is made to one of these routes, the server returns the data in JSON format. Here is an example of a GET request to the /api/products route:

```
GET http://localhost:3001/api/products
```

And here is an example of the response:

```
[
  {
    "id": 1,
    "product_name": "iPhone 13",
    "price": 19.99,
    "stock": 50,
    "category_id": 2,
    "category": {
      "id": 2,
      "category_name": "Electronics"
    },
    "tags": [
      {
        "id": 1,
        "tag_name": "New"
      }
    ]
  },
  // ...
]
```

## Criteria 5: Successfully create, update, and delete data in the database
WHEN I test API POST, PUT, and DELETE routes in Insomnia, THEN I am able to successfully create, update, and delete data in my database.
The application provides POST, PUT, and DELETE routes for categories, products, and tags. When a POST, PUT, or DELETE request is made to one of these routes, the server creates, updates, or deletes the corresponding data in the database. Here is an example of a POST request to the /api/products route:

http
Copy code
POST http://localhost:3001/api/products
Content-Type: application/json

{
  "product_name": "Samsung Galaxy S22",
  "price": 29.99,
  "stock": 50,
  "category_id": 2,
  "tags": [
    {
      "tag_name": "New

<img width="1322" alt="Captura de pantalla 2023-03-16 a la(s) 12 09 24" src="https://user-images.githubusercontent.com/118247139/225713057-fb855c48-13e2-4b76-b68e-541582560e30.png">


Walkthrough video
https://youtu.be/fQ3CieO7Aas
