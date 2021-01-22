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

  click = () => {
    this.setState({
      contentVisible: !this.state.contentVisible,
    });
  }

  render() {
    return (
      <div>
        <header className={styles.header}>
          <Button onClick={this.click} variant='transparent'><i className={'fas fa-bars ' + styles.icon}></i></Button>
        </header>
        <div className={styles.content + (this.state.contentVisible? styles.visible : '')}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Hamburger;
