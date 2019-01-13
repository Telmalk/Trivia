import React, { Component, createRef } from 'react';
import api from '../../helpers/api';
import Category from './Category';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class CategoryContainer extends Component {
  state = {
    category: null,
    currentQuestion: 0,
    score: 0,
    fail: 1,
  };

  // createRef in order to bring back input value to its parent
  answerInput = createRef();

  // async needed when using promise
  async componentDidMount() {
    const data = await api.getCategoryById(this.props.match.params.id);
    this.setState({
      category: data,
    });
    if (!(localStorage.getItem('score')) === true) {
      this.setState({
        score: localStorage.getItem('score'),
      });
    } else {
      this.setState({
        score: 0
      })
    }
    console.log(this.state.score);
    console.log(this.state.category.clues[this.state.currentQuestion].answer);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.score === 10) {
        this.props.history.push('/win');
    }
    console.log(this.state.category.clues.length, this.state.currentQuestion);
    if (this.state.category.clues.length -1  == this.state.currentQuestion ) {
          localStorage.setItem(this.state.category.id, this.state.category.id);
          console.log("fini");
          if (this.state.score === 10) {
            this.props.history.push("/");
          }
          this.props.history.push("/win");
    } else {
          const answer = this.answerInput.current.value;
          console.log(this.state.category.clues[this.state.currentQuestion].answer)
          if (this.state.category.clues[this.state.currentQuestion].answer  === answer) {
                this.setState({
                    currentQuestion: this.state.currentQuestion + 1,
                    score: this.state.score + 2,
                 });
                console.log(this.state.score);
                localStorage.setItem("score", this.state.score);
                if (this.state.score === 10) {
                  this.props.history.push('/win');
                }
          } else {
                this.setState({
                  fail: this.state.fail + 1,
                })
                if (this.state.fail === 3) {
                    console.log("Game Over");
                    localStorage.setItem("score", "0");
                    this.setState({
                      fail: 0,
                    })
                    this.props.history.push("/gameover/" + this.state.score)
                }
                console.log("Wrong");
            }
      }
  };

  render() {
    const { category, currentQuestion } = this.state;
    if (!category) return <div>is loading</div>

    return (
      <Category
        category={category}
        currentQuestionIndex={currentQuestion}
        handleSubmit={this.handleSubmit}
        answerInput={this.answerInput} // plug createRef to chidlren
        score = {this.state.score}
      />
    );
  }
}

export default CategoryContainer;
