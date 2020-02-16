import React from "react";
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
    const { classes } = props;

    return(
        <div className={classes.banner} >
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {props.text}
                    </Typography>
                    { props.success ? props.children : null }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(InfoBanner)