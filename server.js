const mongoose = require('mongoose')
const express = require('express')

app = express();

mongoose.connect('mongodb://127.0.0.1:27017/Activity');

const activityschema = new mongoose.Schema({
    activity: {type: String, require: true}
})

const ActivitieModel = mongoose.model('Activity', activityschema);
const port = process.env.PORT || 3000;

app.get('/', (req,res) => {
    const task1 = new ActivitieModel({
        activity: 'activity 1'
    })

    ActivitieModel.insertMany([task1]);
    res.send('<h2>Document Added</h2>')

})


app.listen(port, () => {
    console.log(port);
})