const express = require("express");
const Joi = require('joi');
const app = express();
app.use(express.json());

const internships=[
    {title:'Website development',id: 1,description: "Internscope is revolution program aimed at building the leaders of tomorrow.Will provide you with a lot of support, mentoring, marketing ideas, and materials, we expect you also to tickle your creative bone from time to time and come up with innovative ideas yourself…!!!"},
    {title:'Mobile app development',id: 2,description:"Internscope is revolution program aimed at building the leaders of tomorrow.Will provide you with a lot of support, mentoring, marketing ideas, and materials, we expect you also to tickle your creative bone from time to time and come up with innovative ideas yourself…!!!"},
    {title:'Digital marketing',id: 3,description:"Internscope is revolution program aimed at building the leaders of tomorrow.Will provide you with a lot of support, mentoring, marketing ideas, and materials, we expect you also to tickle your creative bone from time to time and come up with innovative ideas yourself…!!!"},
    {tite:'Graphics Design',id:4,description:"Internscope is revolution program aimed at building the leaders of tomorrow.Will provide you with a lot of support, mentoring, marketing ideas, and materials, we expect you also to tickle your creative bone from time to time and come up with innovative ideas yourself…!!!"},
    {title:'Social Media Advertisement',id:5,description:"Internscope is revolution program aimed at building the leaders of tomorrow.Will provide you with a lot of support, mentoring, marketing ideas, and materials, we expect you also to tickle your creative bone from time to time and come up with innovative ideas yourself…!!!"},
    {title:'Data Analytics',id:6,description: "Internscope is revolution program aimed at building the leaders of tomorrow.Will provide you with a lot of support, mentoring, marketing ideas, and materials, we expect you also to tickle your creative bone from time to time and come up with innovative ideas yourself…!!!"},
    {title:'.Net Developer',id:7,description:"Internscope is revolution program aimed at building the leaders of tomorrow.Will provide you with a lot of support, mentoring, marketing ideas, and materials, we expect you also to tickle your creative bone from time to time and come up with innovative ideas yourself…!!!"},
    {title:'Python Developer',id:8,description:"Internscope is revolution program aimed at building the leaders of tomorrow.Will provide you with a lot of support, mentoring, marketing ideas, and materials, we expect you also to tickle your creative bone from time to time and come up with innovative ideas yourself…!!!"}
    
]
app.get('/',(req,res)=>{
    res.send('welcome to REST API with the node.js tutorial');
});

app.get('/api/internships',(req,res)=>{
    res.send(internships);
});

app.get('/api/internships/:id',(req,res)=>{
    const intern = internships.find(c => c.id === parseInt(req.params.id));

    if(!intern) res.status(404).send('<h2 style="font-family:Malgun Gothic;color: darkred;">Ooops...Cant find what')
    res.send(intern);
});

app.post('/api/internships',(req, res)=>{
    const{ error } = validateBook(req.body);
    if(error){
res.status(400).send(error.details[0].message)
return;
    }
    const intern = {
        id: internships.length +1,
        title:req.body.title
    };
    internships.push(intern);
    res.send(intern);
});

app.put('/api/internships/:id',(req,res)=>{
    const intern =internships.find(c=>c.id === parseInt(req.params.id));
    if(!intern)res.status(404).send('<h2 style="font-family:Malgun Gothic; color: darkred;">Not Found!!</h2>');
const{error}=validateBook(req.body);
if(error){
    res.status(400).send(error.details[0].message);
    return;
}
intern.title=req.body.title;
res.send(intern);
});


app.delete('/api/internships/:id',(req,res)=>{
    const intern=internships.find(c=>c.id === parseInt(req.params.id));
    if(!intern) res.status(404).send('<h2 style="font-family:Malgun Gothic; color: darkred;">Not Found!!</h2>');
const index=internships.indexOf(intern);
internships.splice(index,1);
res.send(intern);
});

function validateBook(intern){
    const schema={
        title: Joi.string().min(3).required()
    };
    return Joi.validate(intern,schema);

}
const port = process.env.PORT || 3010;
app.listen(port, () =>console.log('Listening on port ${port}..'));

















































































































































































