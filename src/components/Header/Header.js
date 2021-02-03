import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import Search from '../Search/SearchContainer';

class Header extends React.Component {
  render() {

    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={settings.header.logo}></Icon>
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>{settings.home.title}</NavLink>
              <NavLink exact to='/info' activeClassName='active'>{settings.info.title}</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>{settings.faq.title}</NavLink>
            </nav>
            <Search />
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
