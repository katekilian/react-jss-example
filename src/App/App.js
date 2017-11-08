import React from 'react';
import injectSheet from 'react-jss';
import Button from '../Button/Button';
import styles from './styles';

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.lightTheme}>
          <Button darkTheme={false}>
            Light Theme
          </Button>
        </div>
        <div className={classes.darkTheme}>
          <Button darkTheme>
            Dark Theme
          </Button>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(App);
