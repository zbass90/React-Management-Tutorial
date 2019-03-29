const express= require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.get('/api/hello', (req, res)=>{ //사용자가 hello로 접속할시 메시지를 띄운다.
//     res.send({message: 'Hello Express!'});
// });
app.get('/api/customers',(req,res)=>{
    res.send([
        {
            'regno': 1,
            'id' : 'zbass',
            'image' : 'https://placeimg.com/64/64/1',
            'name' : '지경호',
            'birth': '123456',
            'gender' : '여자',
            'job' : '공무원'
          },
          {
            'regno': 2,
            'id' : 'hahori',
            'image' : 'https://placeimg.com/64/64/2',
            'name' : '이윤성',
            'birth': '454545',
            'gender' : '남자',
            'job' : '프리랜서'
          },
          {
            'regno': 3,
            'id' : 'hwikang',
            'image' : 'https://placeimg.com/64/64/3',
            'name' : '강휘',
            'birth': '987654',
            'gender' : '남자',
            'job' : '프로그래머'
          }          
    ]);
});
app.listen(port,()=> console.log(`Listening on port ${port}`)); //실로 앱을 동작시키는 것->동작되면 콘솔찍힘