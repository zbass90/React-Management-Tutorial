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
import CircularProgress from '@material-ui/core/CircularProgress';
const styles = theme => ({
  root : {
    width: '100%',
    marginTop : theme.spacing.unit *3,
    overflowX : "auto"
  },
  table:{
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit*2
  }
})
/*
  React의 컨포넌트 lifecycle
  1. constructor()
  2. componentWillMount() 컨포넌트가 마운트 되기전에 부름
  3. render() 컨포넌트를 화면에 그림
  4. componentDidMount()컨포넌트가 다 불러와졌을때 실행
  비동기적 호출을 사용-> Api서버에서 응답을 하지 않으면 사용자에게 로딩화면을 출력해야함.

  컨포넌트의 props or state => shouldComponentUpdate() 함수등이 사용되어 render를 다시 갱신함 
  상태관리만 잘하면됨!!!
*/

class App extends Component {
  state={
    customers:"", //사용자 기본값 설정
    completed: 0 //프로그래스바의 기본값 설정
  }
  componentDidMount(){
    this.timer = setInterval(this.progress,20);
    this.callApi()
    .then(res => this.setState({customers:res}))
    .catch(err => console.log(err));
  }
  callApi = async () =>{
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  progress =()=>{
    const{completed} = this.state;
    this.setState({completed: completed>=100 ? 0: completed+1 });
  }
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
             {this.state.customers ? this.state.customers.map(c=>{ return(<Customer key={c.regno} regno={c.regno}id={c.id}image={c.image}name={c.name}birth={c.birth} gender={c.gender} job={c.job}/>);
             }) : <TableRow>
               <TableCell colSpan="6" align="center">
                  <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
               </TableCell>
             </TableRow>}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
