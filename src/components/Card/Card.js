import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';
import ReactHtmlParser from 'react-html-parser';
import {Draggable} from 'react-beautiful-dnd';
import {Link} from 'react-router-dom';

const Card = ({title, columnTitle, listTitle, listId, id, index, draggable}) => {
  const origin = <Link className={styles.origin} to={'/list/' + listId}>{ReactHtmlParser(listTitle)} / {columnTitle}</Link>;

  if (!draggable) {
    return (
      <article className={styles.component}>
        <h4>{title}</h4>
        {columnTitle && listTitle && listId && origin}
      </article>);
  } else {
    return (
      <Draggable draggableId={id} index={index}>
        {(provided) => (
          <article
            className={styles.component}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <h4>{title}</h4>
            {columnTitle && listTitle && listId && origin}
          </article>
        )}
      </Draggable>
    );
  }
};

Card.propTypes = {
  title: PropTypes.node.isRequired,
  columnTitle: PropTypes.string,
  listTitle: PropTypes.string,
  id: PropTypes.string,
  index: PropTypes.number,
  draggable: PropTypes.bool,
};

Card.defaultProps = {
  draggable: true,
};

export default Card;
