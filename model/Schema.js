const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({

    name: {
        type: String
    },
    mobile: {
        type: String
    },
    password: {
        type: String
    },
    city: {
        type: String
    },
    email: {
        type: String
    },
    profession: {
        type: String
    },
    degree: {
        type: String
    },
    course: {
        type: String
    },
    university: {
        type: String
    },
    year: {
        type: String
    },
    objective: {
        type: String
    },
    start_time1: {
        type: String
    },
    end_time1: {
        type: String
    },
    post1: {
        type: String
    },
    location1: {
        type: String
    },
    company_name1: {
        type: String
    },
    task1: {
        type: String
    },
    start_time2: {
        type: String
    },
    end_time2: {
        type: String
    },
    post2: {
        type: String
    },
    location2: {
        type: String
    },
    company_name2: {
        type: String
    },
    task2: {
        type: String
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    },
    skill4: {
        type: String
    },
    skill5: {
        type: String
    },
    interest1: {
        type: String
    },
    interest2: {
        type: String
    },
    interest3: {
        type: String
    },
    interest4: {
        type: String
    },
    range1: {
        type: String
    },
    range2: {
        type: String
    },
    range3: {
        type: String
    },
    range4: {
        type: String
    },
    range5: {
        type: String
    },
    selected:[String]
        
})
const User = new mongoose.model("USER", userSchema);
module.exports = User;