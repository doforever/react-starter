import React from 'react';
import styles from './Creator.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';

class Creator extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    action: PropTypes.func,
    warning: PropTypes.bool,
  }

  static defaultProps = {
    text: 'Add new item',
    warning: false,
  }

  state = {
    value: '',
    visibleButtons: false,
  }

  handleChange = event => {
    // console.log(event);
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0,
    });
  }

  handleOK = () => {
    if(this.state.value != ''){
      this.props.action(this.state.value);
      this.setState({
        value: '',
        visibleButtons: false,
      });
    }
  }

  handleCancel = () => {
    let confirm = true;
    if (this.props.warning && !window.confirm(settings.creator.confirmMess)){
      confirm = false;
    }
    if (confirm){
      this.setState({
        value: '',
        visibleButtons: false,
      });
    }
  }

  render() {
    return (
      <div className={styles.component}>
        <input
          type='text'
          placeholder={this.props.text}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className={styles.buttons + (this.state.visibleButtons ? ' ' + styles.buttonsShown : '')}>
          <Button onClick={this.handleOK}>OK</Button>
          <Button onClick={this.handleCancel} variant='danger'>cancel</Button>
        </div>
      </div>
    );
  }
}

export default Creator;
