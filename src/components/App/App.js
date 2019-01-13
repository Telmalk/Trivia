import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import '../../styles/home.css';
import '../../styles/reset.css';
import '../../styles/category.css';
import HomeContainer from '../../views/Home/HomeContainer';
import CategoryContainer from '../../views/Category/CategoryContainer';
import GameOverContainer from '../../views/GameOver/GameOverContainer';
import WinContainer from '../../views/Win/WinContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/categories/:id" component={CategoryContainer} />
            <Route path="/gameover/:score" component={GameOverContainer} />
            <Route path="/win" component={WinContainer} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
