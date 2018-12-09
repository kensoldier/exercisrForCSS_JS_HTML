import React,{Component} from 'react';
import {BrowserRouter as Router ,Route, Link} from 'react-router-dom'

function Index(){
  return (
  <div>
     <h1>I am Home Page</h1>
  </div>
  )
}

class News extends  React.Component{
  render(){
    return(
      <div>
        <Router>
          <div>
            <ul>
              <li> <Link to='/News/basball'>Basball</Link></li>
              <li> <Link to='/News/basketball'>basketball</Link></li>
              <li> <Link to={this.props.match.url+'/voleyball'}>voleyball</Link></li>
              {/* this.props.match 有些東西可以用 */}
            </ul>
            {/* <Route path='/News/basball' component={Sport}/>
            <Route path='/News/basketball' component={Sport}/>
            <Route path='/News/voleyball' component={Sport}/> */}
            {/* 但這樣要寫很多Route 我希望可以用根據不同的 路由名在News跳出葉面 */}
            <Route path='/News/:sportKind' component={Sport}/>
            {/* 可以在Sport 的cpmponent裡面 => this.props.match.params.sportKind 找到上面對應的名子 */}
          </div>
        </Router>
      </div>
    )
  }
}

class Sport extends  React.Component{
  render(){
    console.log(this.props.match.params.sportKind);
    //或是可以用 if 判斷要輸出的組件
    return(
      <div>
        <h1>I all Sport {this.props.match.params.sportKind}</h1>
        
      </div>
    )
  }
}
class About extends  React.Component{
  render(){
    return(
      <div>
        <h1>I am About Page</h1>
      </div>
    )
  }
}

export default class App extends React.Component {
  render() {
    // console.log(Route);
    return (
        <Router>
        {/* 要用就要寫 且只能有一個根源素 */}
          <div>

            {/* <Link to='/Index'>Index</Link><br/> */}
            <Link to='/'>News</Link><br/>
            <Link to='/News'>News</Link><br/>
            <Link to='/About'>About</Link><br/>
            {/* <Route path='/Index' component={Index}/> */}
            {/* 加上 exact會嚴格匹配  因為如果不嚴格的話 /News 有 /也會吃到*/}
            <Route exact path='/' component={Index}/>
            <Route path='/News' component={News}/>
            <Route path='/About' component={About}/>
            
            {/* component 裡面可以是函數也可以是class */}
          </div>
        </Router>
      );
  }
}