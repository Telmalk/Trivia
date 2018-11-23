import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = ({ categories, alreadyPlayed }) => (
  <section>
    <h1>Homepage</h1>
    {categories.length > 0 && (
      <section>
        {categories.map(category => {
          let done = false;
            for (let i = 0; i < alreadyPlayed.length; i++) {
              if (alreadyPlayed[i] === category.id) {
                done = true;
              }
            }
            if (!done) {
                return (
                    <Link to={`/categories/${category.id}`} key={category.id}>
                        {category.title}
                    </Link>
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
