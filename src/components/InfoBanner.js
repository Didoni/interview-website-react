import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  banner: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
};

function InfoBanner(props) {
  const { classes, success, children, text } = props;

  return (
    <div className={classes.banner}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {text}
          </Typography>
          {success ? children : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}

InfoBanner.propTypes = {
  success: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

InfoBanner.defaultProps = {
  success: false,
};

export default withStyles(styles)(InfoBanner);
