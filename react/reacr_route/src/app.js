import React,{Component} from 'react';
import {BrowserRouter as Router ,Route, Link} from 'react-router-dom'
class Book extends React.Component{
  render(){
    console.log(this.props.match);
    return(
      <div>
      {/* 用 jquery接收後台資料 也可以 import $ from jquery 用jquery的ajax等料*/}
      </div>
    )
  }
}

 class App extends React.Component {
  render() {
    // console.log(Route);
    return (
        <Router>
          <div>

            <Link to='/001'>XXXX</Link><br/>
            <Link to='/002'>OOOOO</Link><br/>
            <Link to='/003'>SSSSS</Link><br/>

            <Route  path='/:id' component={Book}/>

            </div>
        </Router>
      );
  }
}


export default App;