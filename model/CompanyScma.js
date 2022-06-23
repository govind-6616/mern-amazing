const mongoose = require('mongoose');
const companySchema = new mongoose.Schema({
    company_name: {
        type: String
    },
    mobile: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    company_info: {
        type: String
    },
    company_web: {
        type: String
    },

})
const Company = new mongoose.model("COMPANY", companySchema);
module.exports = Company;