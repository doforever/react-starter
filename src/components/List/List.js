import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import Container from '../Container/Container';
import {DragDropContext} from 'react-beautiful-dnd';

const List = ({title, image, description, columns, addColumn, moveCard}) => {

  const moveCardHandler = result => {
    if(
      result.destination
      &&
      (
        result.destination.index != result.source.index
        ||
        result.destination.droppableId != result.source.droppableId
      )
    ){
      moveCard({
        id: result.draggableId,
        dest: {
          index: result.destination.index,
          columnId: result.destination.droppableId,
        },
        src: {
          index: result.source.index,
          columnId: result.source.droppableId,
        },
      });
    }
  };

  return (
    <Container>
      <section className={styles.component}>
        <Hero titleText={title} imgSrc={image}/>
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <DragDropContext onDragEnd={moveCardHandler}>
          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>
        </DragDropContext>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={addColumn}/>
        </div>
      </section>
    </Container>
  );
};

List.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string,
  description: PropTypes.node,
  columns: PropTypes.array,
  addColumn: PropTypes.func,
  moveCard: PropTypes.func,
};

List.defaultProps = {
  description: settings.list.defaultDescription,
  image: settings.list.defaultImage,
};

export default List;
