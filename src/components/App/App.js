import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer';
import {settings} from '../../data/dataStore';
import SearchResults from '../SearchResults/SearchResultsContainer';
import Hamburger from '../Hamburger/Hamburger';
import Navigation from '../Navigation/NavigationContainer';
import {DragDropContext} from 'react-beautiful-dnd';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addList: PropTypes.func,
    searchString: PropTypes.string,
    changeChosenList: PropTypes.func,
    moveCard: PropTypes.func,
  }

  addList = (listData) =>  {
    this.props.addList(listData);
    this.props.changeChosenList('');
  }

  render() {
    const {title, subtitle, lists, searchString, moveCard} = this.props;
    let content;

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

    if (searchString) {
      content = <SearchResults />;
    } else {
      content =
      <DragDropContext onDragEnd={moveCardHandler}>
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      </DragDropContext>;
    }

    return (
      <main className={styles.component}>
        <Hamburger>
          <Navigation />
        </Hamburger>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        {content}
        <div>
          {!searchString && <Creator text={settings.listCreatorText} action={this.addList}/>}
        </div>
      </main>
    );
  }
}

export default App;
