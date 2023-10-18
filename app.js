const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

const userRoutes = require('./routes/user');
const expenseRoutes = require('./routes/expense');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Define CORS headers if necessary
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

app.use('/user', userRoutes);
app.use('/expense', expenseRoutes);

sequelize.sync()
    .then(result => {
        console.log('Database synced.');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(err => {
        console.log(err);
    });
