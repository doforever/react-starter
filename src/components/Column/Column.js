import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore';
import {Droppable} from 'react-beautiful-dnd';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    icon: PropTypes.node,
    cards: PropTypes.array,
    addCard: PropTypes.func,
    id: PropTypes.string,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  createCard = (title) => {
    this.props.addCard(title, this.props.cards.length);
  }

  render() {
    const {title, icon, cards, id} = this.props;
    const sortedCards = cards.sort((a, b) => a.index - b.index);

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}><Icon name={icon}/></span>{title}
        </h3>
        <div>
          <Droppable droppableId={id}>
            {provided => (
              <div
                className={styles.cards}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {sortedCards.map(cardData => (
                  <Card key={cardData.id} {...cardData} />
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <div>
          <Creator text={settings.cardCreatorText} action={this.createCard}/>
        </div>
      </section>
    );
  }
}

export default Column;
