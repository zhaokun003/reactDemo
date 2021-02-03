import React from 'react';
// import { Router, Route, Link, HashRouter, Switch } from 'react-router'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoadableComponent from "./utils/lazyLoad.js"; // 异步加载


// 路由
const Home = LoadableComponent(() => import('./components/Home'))
const About = LoadableComponent(() => import('./components/Home/about'))
const Inbox = LoadableComponent(() => import('./components/Home/inbox'))



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <div>sdfsd</div>
        <Switch>
          <Route exact path="/" component={Home}>
            <Route path="/about" component={About} />
            <Route path="/inbox" component={Inbox} />
          </Route>

        </Switch>
      </Router>
    )
  }



}


export default App;
