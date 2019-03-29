const express= require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/hello', (req, res)=>{ //사용자가 hello로 접속할시 메시지를 띄운다.
    res.send({message: 'Hello Express!'});
});
app.listen(port,()=> console.log(`Listening on port ${port}`)); //실로 앱을 동작시키는 것->동작되면 콘솔찍힘