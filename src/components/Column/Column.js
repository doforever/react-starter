import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Card from '../Card/Card.js';
// import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    icon: PropTypes.node,
    cards: PropTypes.array,
  }

  render() {
    const {title, icon, cards} = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}><Icon name={icon}/></span>{title}
        </h3>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/* <div>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div> */}
      </section>
    );
  }
}

export default Column;
