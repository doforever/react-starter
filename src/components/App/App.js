import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer';
import {settings} from '../../data/dataStore';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addList: PropTypes.func,
    searchString: PropTypes.string,
  }

  render() {
    const {title, subtitle, lists, addList, searchString} = this.props;
    let content;

    if (searchString) {
      content = (lists.map(listData => (
        <SearchResults key={listData.id} {...listData} />
      )));
    } else {
      content = (lists.map(listData => (
        <List key={listData.id} {...listData} />
      )));
    }

    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        {content}
        <div>
          <Creator text={settings.listCreatorText} action={addList}/>
        </div>
      </main>
    );
  }
}

export default App;
