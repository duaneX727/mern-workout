const dns = require('node:dns');
dns.setServers(['1.1.1.1', '8.8.8.8']);

require('dotenv').config();
const express = require('express'); const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
// const userRoutes = require('./routes/user')

// express app
const app = express();


//middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next();
});

// Routes
// app.get('/', (req, res)=>{
//   res.json({ msg: 'Welcome to the app' })
// })
// routes
app.use('/api/workouts', workoutRoutes);
//app.use('/api/user', userRoutes);


// connect to db
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port:', process.env.PORT);
    });
  }) // This closes the .then callback and method [cite: 3, 6]
  .catch((err) => {
    console.log(err);
  });
