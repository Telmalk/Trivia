import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/category.css';
import { Link } from 'react-router-dom';


const Category = ({ category, currentQuestionIndex, handleSubmit, answerInput, score }) => {
  const currentQuestion = category.clues[currentQuestionIndex];
  return (
    <section className={'questionContainer'}>
    <h4 className={'scoreContainer'}>Score = {score}</h4>
      <form className={'formContainer'} onSubmit={handleSubmit}>
        <h1 className={'categoryChoose'}>You choosed: {category.title}</h1>
        <div className="question">
          <h3 className="question__title">
            {currentQuestion.question}
          </h3>
          <div className="question__answerInput">
            {/* We give the ref below in order check the value */}
            <input type={'text'} className={'question__input'} ref={answerInput} placeholder={'entrer votre réponse ici'} />
          </div>
          <button className="question__submit" type="submit">
            Next
          </button>
        </div>
      </form>
      <div className={'backHomeContainer'}>
          <Link to={'/'}>Retour a la home</Link>
      </div>
    </section>
  );
};

Category.propTypes = {
  category: PropTypes.shape({}).isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  answerInput: PropTypes.shape({
    value: PropTypes.instanceOf(HTMLInputElement)
  }),
};

export default Category;
