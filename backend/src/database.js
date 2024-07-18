const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bryan:1234@cluster0.hitasd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(db=>console.log('Database is Connect'))
.catch(err=>console.log(err))