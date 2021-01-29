import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './SearchResults.scss';

const SearchResults = ({superCards}) => (
  <section className={styles.component}>
    {(superCards).map(cardData => (
      <Card key={cardData.id} {...cardData} />
    ))}
  </section>
);

SearchResults.propTypes = {
  superCards: PropTypes.array,
};

export default SearchResults;
