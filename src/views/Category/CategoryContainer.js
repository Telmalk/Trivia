import React, { Component, createRef } from 'react';
import api from '../../helpers/api';
import Category from './Category';

class CategoryContainer extends Component {
  state = {
    category: null,
    currentQuestion: 0,
  };

  // createRef in order to bring back input value to its parent
  answerInput = createRef();

  // async needed when using promise
  async componentDidMount() {
    const data = await api.getCategoryById(this.props.match.params.id);
    this.setState({
      category: data,
    });
  }

  handleSubmit = (e) => {
    // here I prevent de fault bh of submitting form
    e.preventDefault();
    const answer = this.answerInput.current.value;
    console.log(this.state.category.clues[this.state.currentQuestion].answer)
    if (this.state.category.clues.length - 1 == this.state.currentQuestion ) {
          localStorage.setItem(this.state.category.id, this.state.category.id);
          console.log("fini");
          console.log(localStorage.getItem(this.state.category.id));

    } else {
          if (this.state.category.clues[this.state.currentQuestion].answer  == answer) {
                this.setState({
                    currentQuestion: this.state.currentQuestion + 1,
                 });
          } else {
                console.log("Wrong");
            }
      }
  };

  render() {
    const { category, currentQuestion } = this.state;
    // at first render, category will be null so we need to wait
    // before using data.
    if (!category) return <div>is loading</div>

    return (
      <Category
        category={category}
        currentQuestionIndex={currentQuestion}
        handleSubmit={this.handleSubmit}
        answerInput={this.answerInput} // plug createRef to chidlren
      />
    );
  }
}

export default CategoryContainer;
