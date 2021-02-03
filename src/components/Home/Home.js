import React from 'react';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addList: PropTypes.func,
    moveCard: PropTypes.func,
  }

  render() {
    const {title, subtitle, lists, addList} = this.props;

    return (
      <main className={styles.component}>
        <Container>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          {lists.map(listData => (
            <ListLink key={listData.id} {...listData} />
          ))}
          <div>
            <Creator text={settings.listCreatorText} action={addList}/>
          </div>
        </Container>
      </main>
    );
  }
}

export default Home;
