# Libraries Used in the Course Selling App

This document provides an overview of the libraries used in the Course Selling App project and their purposes.

## Libraries

1. **Express**
    - **Usage**: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is used to set up the server and handle routing.

2. **Mongoose**
    - **Usage**: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to interact with the MongoDB database.

3. **jsonwebtoken**
    - **Usage**: This library is used to create and verify JSON Web Tokens (JWT). It is essential for implementing authentication and authorization in the application.

4. **bcryptjs**
    - **Usage**: bcryptjs is used to hash passwords before storing them in the database. It helps in securing user passwords by making it difficult for attackers to retrieve the original passwords.

5. **cors**
    - **Usage**: CORS (Cross-Origin Resource Sharing) is a mechanism that allows restricted resources on a web page to be requested from another domain. This library is used to enable CORS in the application.

6. **dotenv**
    - **Usage**: dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`. It is used to manage configuration settings.
    - 


7. **body-parser**
    - **Usage**: body-parser is a middleware that parses incoming request bodies in a middleware before your handlers, available under the `req.body` property. It is used to handle JSON and URL-encoded form data.
    - **USED in Middlewares** - exprss.json()

8. **nodemon**
    - **Usage**: nodemon is a utility that monitors for any changes in your source and automatically restarts your server. It is used during development to improve productivity.

## Conclusion

These libraries collectively help in building a robust, secure, and efficient course selling application. Each library serves a specific purpose, from handling HTTP requests and responses to managing data and ensuring security.
