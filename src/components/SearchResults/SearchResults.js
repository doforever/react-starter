import React from 'react';
import PropTypes from 'prop-types';
// import styles from './List.scss';
// import Column from '../Column/ColumnContainer';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

const SearchResults = ({title}) => (
  <section>
    <h2>{ReactHtmlParser(title)}</h2>
    {/* <div>
      {(columns).map(columnData => (
        <Column key={columnData.id} {...columnData} />
      ))}
    </div> */}
  </section>
);

SearchResults.propTypes = {
  title: PropTypes.node.isRequired,
  columns: PropTypes.array,
};

SearchResults.defaultProps = {
  image: settings.list.defaultImage,
};

export default SearchResults;
