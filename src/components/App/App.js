import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents, listData, settings} from '../../data/dataStore.js';
import Creator from '../Creator/Creator.js';
import Hamburger from '../Hamburger/Hamburger.js';

class App extends React.Component {
  state = {
    lists: listData ? [Object.assign({key: 0,
    },listData)] : [],
  }

  addList(title){
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
            title,
            columns: [],
          },
        ],
      }
    ));
  }

  render() {
    return (
      <main className={styles.component}>
        <Hamburger>
          <h1 className={styles.title}>{pageContents.title}</h1>
          <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
          {this.state.lists.map(({key, ...listProps}) => (
            <List key={key} {...listProps} />
          ))}
          <div>
            <Creator text={settings.listCreatorText} action={title => this.addList(title)} warning={true}/>
          </div>
        </Hamburger>
      </main>
    );
  }
}

export default App;
