const mongoose=require('mongoose');
//  const DB="mongodb://localhost:27017/resume";
const DB='mongodb+srv://govind:govind@cluster0.heq3q.mongodb.net/resumes?retryWrites=true&w=majority';
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('connection successful');
}).catch(()=>{
    console.log('no connection');
})