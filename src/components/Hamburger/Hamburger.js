import React from 'react';
import styles from './Hamburger.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

class Hamburger extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }

  state = {
    contentVisible: false,
  }

  handleClick = () => {
    this.setState({
      contentVisible: !this.state.contentVisible,
    });
  }

  render() {
    return (
      <div className={styles.component}>
        <header className={styles.header}>
          <Button onClick={this.handleClick} variant='transparent'><i className={'fas fa-bars ' + styles.icon}></i></Button>
        </header>
        <div className={styles.content + (this.state.contentVisible? styles.visible : '')}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Hamburger;
