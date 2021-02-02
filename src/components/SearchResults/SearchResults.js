import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './SearchResults.scss';

const SearchResults = ({cardsWithOrigin}) => (
  <section className={styles.component}>
    {(cardsWithOrigin).map(cardData => (
      <Card key={cardData.id} draggable={false} {...cardData} />
    ))}
  </section>
);

SearchResults.propTypes = {
  cardsWithOrigin: PropTypes.array,
};

export default SearchResults;
