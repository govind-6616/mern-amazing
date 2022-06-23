const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema({
    job_profile: {
        type: String
    },
    company_name: {
        type: String
    },
    company_info: {
        type: String
    },
    company_location: {
        type: String
    },
    salary: {
        type: String
    },
    apply_date: {
        type: String
    },
    joining_date: {
        type: String
    },
    type_of: {
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
    about_job: {
        type: String
    },
    no_of_openings: {
        type: String
    },
    candidates_applied: [String]

})
const Job = new mongoose.model("JOB", jobSchema);
module.exports = Job;