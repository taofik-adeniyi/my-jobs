const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log("Connected to Mongo DB server");
    });
};

module.exports = connectDB;

// const mongoose = require('mongoose')

// const connectionString = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1/tasks-manager'
// const connectionStringTwo = 'mongodb://127.0.0.1:27017/'
// mongoose.set('strictQuery', true)

// const connectDB = (url) => {
//     return mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true }).then(()=> {
//     console.log("Connected to Mongo DB server");
// })
// }
// module.exports = connectDB
