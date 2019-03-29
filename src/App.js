import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';
const styles = theme => ({
  root : {
    width: '100%',
    marginTop : theme.spacing.unit *3,
    overflowX : "auto"
  },
  table:{
    minWidth: 1080
  }
})
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
    const { classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>아이디</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
             {customers.map(c=>{ return(<Customer key={c.regno} regno={c.regno}id={c.id}image={c.image}name={c.name}birth={c.birth} gender={c.gender} job={c.job}/>);})}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
