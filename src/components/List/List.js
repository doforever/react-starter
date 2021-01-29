import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';

const List = ({title, image, description, columns, addColumn}) => (
  <section className={styles.component}>
    <Hero titleText={title} imgSrc={image}/>
    <div className={styles.description}>
      {ReactHtmlParser(description)}
    </div>
    <div className={styles.columns}>
      {columns.map(columnData => (
        <Column key={columnData.id} {...columnData} />
      ))}
    </div>
    <div className={styles.creator}>
      <Creator text={settings.columnCreatorText} action={addColumn}/>
    </div>
  </section>
);

List.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string,
  description: PropTypes.node,
  columns: PropTypes.array,
  addColumn: PropTypes.func,
};

List.defaultProps = {
  description: settings.list.defaultDescription,
  image: settings.list.defaultImage,
};

export default List;
