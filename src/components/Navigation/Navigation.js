import React from 'react';
import styles from './Navigation.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

class Navigation extends React.Component {
  static propTypes = {
    lists: PropTypes.array,
    changeChosenList: PropTypes.func,
    chosenListId: PropTypes.string,
  };

  handleLinkClick(listId) {
    this.props.changeChosenList(listId);
  }

  render() {
    const {lists} = this.props;

    return (
      <nav className={styles.component}>
        {(lists.map(listData => (
          <a key={listData.id} className={styles.link} onClick={() => this.handleLinkClick(listData.id)}>{ReactHtmlParser(listData.title)}</a>
        )))}
        <a className={styles.link} onClick={() => this.handleLinkClick('')}>All</a>
      </nav>
    );
  }
}

export default Navigation;
