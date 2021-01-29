import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore';

const Column = ({title, icon, cards, addCard}) => (
  <section className={styles.component}>
    <h3 className={styles.title}>
      <span className={styles.icon}><Icon name={icon}/></span>{title}
    </h3>
    <div>
      {cards.map(cardData => (
        <Card key={cardData.id} {...cardData} />
      ))}
    </div>
    <div>
      <Creator text={settings.cardCreatorText} action={addCard}/>
    </div>
  </section>
);

Column.propTypes = {
  title: PropTypes.node.isRequired,
  icon: PropTypes.node,
  cards: PropTypes.array,
  addCard: PropTypes.func,
};

Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default Column;
