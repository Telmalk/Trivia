import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = ({ categories, alreadyPlayed, score }) => (
  <section className={'homeContainer'}>
    <h1 className={'homeTitle'}>Homepage</h1>
    <h3 className={'explicationText'}>Choisissez une categorie</h3>
    <h5>Vous avez répondu a toutes les question de  {score} categories</h5>
    {categories.length > 0 && (
      <section className={'categoriesContainer'}>
        {categories.map(category => {
          let done = false;
            for (let i = 0; i < alreadyPlayed.length; i++) {
              if (alreadyPlayed[i] === category.id) {
                done = true;
              }
            }
            if (!done) {
                return (
                  <div className={'category-linkContainer'}>
                    <Link className={'categoryLink'} to={`/categories/${category.id}`} key={category.id}>
                        {category.title}
                    </Link>
                  </div>
                )
            }})}
      </section>
    )}
  </section>
);

Home.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      clues_count: PropTypes.number
    }),
  ),
  alreadyPlayed: PropTypes.arrayOf(
        PropTypes.number,
    )
}

export default Home;
