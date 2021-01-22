import React from 'react';
import styles from './Button.scss';
import PropTypes from 'prop-types';


const Button = ({variant = '', children, ...otherProps}) => (
  <button
    {...otherProps}
    className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    {children}
  </button>
);

Button.propTypes = {
  variant: PropTypes.node,
  children: PropTypes.node,
};

export default Button;
