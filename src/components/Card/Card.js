import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';
import ReactHtmlParser from 'react-html-parser';
import {Draggable} from 'react-beautiful-dnd';

const Card = ({title, columnTitle, listTitle, id, index}) => {
  if (columnTitle) {
    return (
      <article className={styles.component}>
        <h4>{title}</h4>
        <h5>{ReactHtmlParser(listTitle)} / {columnTitle}</h5>
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
            {columnTitle && <h5>{ReactHtmlParser(listTitle)} / {columnTitle}</h5>}
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
};

export default Card;
