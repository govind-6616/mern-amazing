const express = require('express');
const cors = require('cors');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const app = express();
const { urlencoded } = require("express");
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());



// connecting to Database
require('./db/conn');

// Definning User Schema for Collection
const User = require('./model/Schema');

app.post("/register", (req, res) => {
    const { name, email, password, city, mobile, profession } = req.body;
    if (!name || !email || !password || !mobile || !city || !profession) {
        return res.status(402).json({ error: "please fill the form properly" });
    }
    else if (password.length < 8) {
        return res.status(411).json({ error: "password must be alteast 8 charactrs" });
    }
    else if (mobile.length < 10 || mobile.length > 12) {
        // return res.status(421).json({ error: "Mobile Number must be valid" });
        res.statusCode(411).send("mobile no should be valid");
    }
    else {
        User.findOne({ email: email })
            .then((userExist) => {
                if (userExist) {
                    return res.status(422).json({ message: "User already exist" });
                }
                let hpassword = bcrypt.hashSync(password, bcrypt.genSaltSync());
                // console.log(hpassword);
                const user = new User({ name, email, password: hpassword, city, mobile, profession });

                user.save().then(() => {
                    console.log('success in registeration');
                    return res.status(200).json({ message: "Successful registered" });
                }).catch((err) => {
                    console.log('failed in Registeration');
                    return res.status(500).json({ error: "failed in registeration" });
                })
            }).catch((err) => {
                console.log(err);
            })
    }
})

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const userLogin = await User.findOne({ email: email });
        if (userLogin) {
            const isMatch = bcrypt.compareSync(password, userLogin.password);
            if (isMatch) {
                const token = jwt.sign({
                    _id: userLogin._id
                }, 'secret123')
                res.status(200).json({ status: 'ok', userLogin: token, data: userLogin });
            }
            else {
                return res.status(401).json({ message: "password not match", userLogin: false });
            }
        }
        else {
            return res.status(411).json({ err: "invalid credentials" });
        }
    }
    catch (e) {
        console.log(e);
    }
})

app.patch('/:_id', async (req, res) => {
    const token = req.headers['x-access-token'];
    try {
        const decode = jwt.verify(token, 'secret123');
        const _id = decode._id;

        console.log(req.body);
        const result = await User.findByIdAndUpdate(_id, req.body);
        res.send("data save");
    }
    catch (e) {
        res.send(e);
    }
});

app.get('/show', async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        if (token) {
            const decode = jwt.verify(token, 'secret123');
            console.log(decode);
            if (decode) {
                const _id = decode._id;
                const result = await User.findOne({ _id: _id });
                // res.send(result);
                console.log(result);
                return res.status(200).send(result);
            }
            else {
                return res.status(400).send({ status: 'bad', result: false })
            }
        }
        else {
            return res.status(400).send({ status: 'bad', result: false })
        }
        // return res.json({ status: 'ok', name: result.name });

    }
    catch (e) {
        res.status(400).send(e);
    }
});

app.get('/show/:_id', async (req, res) => {
    const token = req.headers['x-access-token'];
    try {
        const decode = jwt.verify(token, 'secret123');
        const _id = decode._id;
        const result = await User.findById({ _id });
        res.send(result);
    }
    catch (e) {
        res.send(e);
    }
});

app.patch('/update/:_id', async (req, res) => {
    const token = req.headers['x-access-token'];
    try {
        const decode = jwt.verify(token, 'secret123');
        const _id = decode._id
        const result = await User.findByIdAndUpdate(_id, req.body, { new: true });
        res.send(result);
    }
    catch (e) {
        console.log(e);
    }
});

app.get('/logout', (req, res) => {
    return res.json({ "message": logOut });
});

// Defining Job Schema for Collections
const Job = require('./model/JobScma');

// Defining Company Schema for collections
const Company = require('./model/CompanyScma');

app.post("/companyregister", (req, res) => {
    const { company_name, email, password, mobile, company_info, company_web } = req.body;
    if (!company_name || !email || !password || !mobile || !company_info || !company_web) {
        return res.status(402).json({ error: "please fill the form properly" });
    }
    else if (password.length < 8) {
        return res.status(411).json({ error: "password must be alteast 8 charactrs" });
    }
    else if (mobile.length < 10 || mobile.length > 12) {
        // return res.status(421).json({ error: "Mobile Number must be valid" });
        res.statusCode(411).send("mobile no should be valid");
    }
    else {
        Company.findOne({ email: email })
            .then((userExist) => {
                if (userExist) {
                    return res.status(422).json({ message: "User already exist" });
                }
                let hpassword = bcrypt.hashSync(password, bcrypt.genSaltSync());
                // console.log(hpassword);
                const company = new Company({ company_name, email, password: hpassword, mobile, company_info, company_web });

                company.save().then(() => {
                    console.log('success in registeration');
                    return res.status(200).json({ message: "Successful registered" });
                }).catch((err) => {
                    console.log('failed in Registeration');
                    return res.status(500).json({ error: "failed in registeration" });
                })
            }).catch((err) => {
                console.log(err);
            })
    }
})

app.post("/companylogin", async (req, res) => {
    try {
        const { email, password } = req.body;
        const companyLogin = await Company.findOne({ email: email });
        if (companyLogin) {
            const isMatch = bcrypt.compareSync(password, companyLogin.password);
            if (isMatch) {
                const ctoken = jwt.sign({
                    _id: companyLogin._id
                }, 'secret321')
                console.log(ctoken);
                res.status(200).json({ status: 'ok', companyLogin: ctoken, data: companyLogin });
            }
            else {
                return res.status(401).json({ message: "password not match", companyLogin: false });
            }
        }
        else {
            return res.status(411).json({ err: "invalid credentials" });
        }
    }
    catch (e) {
        console.log(e);
    }
})

app.get('/verify', async (req, res) => {
    const ctoken = req.headers[`x-access-token`];
    try {
        const decode = jwt.verify(ctoken, 'secret321');
        const _id = decode._id;
        const company = await Company.findById({ _id });
        res.status(200).send(company);
    }
    catch (e) {
        console.log(e);
    }
})

app.post('/createjob', async (req, res) => {
    //   we have to use patch for push data into array
    const ctoken = req.headers['x-access-token'];
    try {
        const decode = jwt.verify(ctoken, 'secret321');
        const _id = decode._id;
        const { company_name, company_info, job_profile, company_location, salary, apply_date, joining_date, no_of_openings, about_job, skill1, skill2, skill3, skill4, type_of } = req.body;
        if (!company_name || !company_info || !job_profile || !company_location || !salary || !apply_date || !joining_date || !no_of_openings || !about_job || !skill1 || !skill2 || !skill3 || !skill4 || !type_of) {
            return res.status(401).send("please fill form properly");
        }
        else {
            const job = await new Job({ company_name, company_info, job_profile, company_location, salary, apply_date, joining_date, no_of_openings, about_job, skill1, skill2, skill3, skill4, type_of });
            job.save();
            res.status(200).send("save data");
            console.log(job);
        }
    }
    catch (e) {
        console.log(e);
    }
})

app.get('/jobdata/:_id', async (req, res) => {
    try {
        const _id = req.params._id;
        const job = await Job.findById(_id);
        res.send(job);
    }
    catch (e) {
        console.log(e);
    }
})

app.get('/jobposts/:company_name', async (req, res) => {
    try {
        const company_name = req.params.company_name;
        console.log(company_name);
        const job = await Job.find({ "company_name": company_name });
        res.send(job);
    }
    catch (e) {
        console.log(e);
    }
})

app.get(`/jobdetails`, async (req, res) => {
    try {
        const job = await Job.find({});
        res.send(job);
    }
    catch (e) {
        console.log(e);
    }
})

app.patch(`/apply/:_id`, async (req, res) => {
    const token = req.headers['x-access-token'];
    try {
        const _id = req.params._id;
        const decode = jwt.verify(token, 'secret123');
        const id = decode._id;
        const resp = await Job.findByIdAndUpdate({ _id }, {
            $addToSet: {
                candidates_applied: id
            }
        })
        res.send(resp);
        console.log(resp);
    }
    catch (e) {
        console.log(e);
    }
})

app.get(`/userHistory`, async (req, res) => {
    const token = req.headers['x-access-token'];
    try {
        const decode = jwt.verify(token, 'secret123');
        const _id = decode._id;
        const resp = await Job.find({ "candidates_applied": _id });
        res.send(resp);
    }
    catch (e) {
        console.log(e);
    }
})

app.patch('/jobposts/:id/:_id', async (req, res) => {

    try {
        const _id = req.params._id;
        const { c_id } = req.body;
        const id = req.params.id;
        console.log(id);
        console.log(_id);
        console.log(c_id);
        const result = await User.findByIdAndUpdate({ _id }, {
            $addToSet: {
                selected: id
            }

        });
        res.send(result);
    }
    catch (e) {
        console.log(e);
    }
})

app.get(`/getcmpy/:company_name/:job_profile`, async (req, res) => {
    try {
        const company_name = req.params.company_name;
        const job_profile = req.params.job_profile;
        const resp = await Job.findOne({ company_name, job_profile });
        res.send(resp);
    }
    catch (e) {
        console.log(e);
    }
});

app.post(`/jobdetail`, async (req, res) => {
    try {
        const { job_profile, salary, type_of } = req.body;
        console.log(salary);
        const job = await Job.find({ $or: [{ salary: salary }, { job_profile: job_profile }, { type_of: type_of }] });
        // const job = await Job.find({ "salary": salary });
        console.log(job);
        res.send(job);
    }
    catch (e) {

    }
})

app.get('/jobposts/:company_name/:_id', async (req, res) => {
    try {
        const _id = req.params._id;
        console.log(_id);
        const user = await User.findById({ _id });
        console.log(user);
        res.send(user);
    }
    catch (e) {
        console.log(e);
    }
})

app.patch('/rejected/:company_name/:job_profile/:_id', async (req, res) => {
    try {
        const _id = req.params._id;
        const company_name = req.params.company_name;
        const jname = req.params.job_profile;
        console.log(jname);
        console.log(company_name);
        console.log(_id);
        const result = await Job.updateOne({ "job_profile": jname, company_name },
            {
                $pull: {
                    candidates_applied: _id
                }
            });

        res.send(result);
        console.log(result);
    }
    catch (e) {
        console.log(e);
    }
})

app.patch('/clearstat/:email/:_id', async (req, res) => {
    try {
        const _id = req.params._id;
        const email = req.params.email;
        console.log(email);
        console.log(_id);
        const result = await User.updateOne({ "email": email },
            {
                $pull: {
                    selected: _id
                }
            });

        res.send(result);
        console.log(result);
    }
    catch (e) {
        console.log(e);
    }
})

app.patch('/mystat/:email/:_id', async (req, res) => {
    try {
        const _id = req.params._id;
        const email = req.params.email;
        console.log(email);
        console.log(_id);
        const result = await User.findOne({ "email": email,"selected":_id })
          if(result){
            res.status(200).json({message:"true"})
          }
          else{
            res.status(200).json({message:"false"});
          }
    }
    catch (e) {
        console.log(e);
    }
})

app.get(`/check/:_id`, async (req, res) => {
    const token = req.headers['x-access-token'];
    try {
        const decode = jwt.verify(token, 'secret123');
        const id = decode._id;
        const _id = req.params._id;
        const response = await Job.findOne({ _id, "candidates_applied": id });
        if (response) {
            res.send(response);
            console.log(response);
        }
        else {
            res.json({ msg: "not_found" });
        }
    }
    catch (e) {
        console.log(e);
    }
})

app.delete('/jobposts/:company_name/:_id', async (req, res) => {
    try {
        const _id = req.params._id;
        console.log(_id);
        const result = await Job.findByIdAndDelete(_id);
        res.send(result);
        console.log(result);
    }
    catch (e) {
        console.log(e);
    }
})

 if (process.env.NODE_ENV = "production") {
     app.use(express.static("frontend/build"));
     const path = require('path');
     app.get("*", (req, res) => {
         res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
     })
 }

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log('server running at 8000')

});