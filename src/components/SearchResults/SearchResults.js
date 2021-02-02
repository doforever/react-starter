import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './SearchResults.scss';

const SearchResults = ({cards}) => (
  <section className={styles.component}>
    {(cards).map(cardData => (
      <Card key={cardData.id} draggable={false} {...cardData} />
    ))}
  </section>
);

SearchResults.propTypes = {
  cards: PropTypes.array,
};

export default SearchResults;
