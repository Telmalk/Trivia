import React, { Component } from 'react';
import Home from './Home';
import api from '../../helpers/api';

class HomeContainer extends Component {
  state = {
    categories: [],
    alreadyPlayed: [],
    score: 0,
  }

  async componentDidMount() {
    const data = await api.getCategories();
    this.setState({
      categories: data,
    });
    this.getDoneCategories();
  }

  getDoneCategories() {
        const idTab = [];
        for (let i  = 0; i < this.state.categories.length; i++) {
          if (JSON.parse(localStorage.getItem(this.state.categories[i].id) != null)) {
                idTab.push(JSON.parse(localStorage.getItem(this.state.categories[i].id)));
                this.setState({
                  score: this.state.score + 1
                })
             }
        }
        this.setState({
            alreadyPlayed: idTab,
        });
  }

  render() {
    return (
      <Home categories={this.state.categories} alreadyPlayed={this.state.alreadyPlayed} score={this.state.score} />
    );
  }
}

export default HomeContainer;
