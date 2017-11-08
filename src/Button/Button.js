import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

export class Button extends React.Component {
  render() {
    const { classes, darkTheme } = this.props;
    const buttonStyle = darkTheme ? classes.buttonDark : classes.buttonLight;
    
    return (
      <button className={buttonStyle}>
        {this.props.children}
      </button>
    );
  }
};

Button.propTypes = {
  classes: PropTypes.object.isRequired,
  darkTheme: PropTypes.bool.isRequired,
};

export default injectSheet(styles)(Button);