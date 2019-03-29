import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
const customers =[{
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
]
class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c=>{
            return(
              <Customer
              key={c.regno}
              id={c.id}
              image={c.image}
              name={c.name}
              birth={c.birth}
              gender={c.gender}
              job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
