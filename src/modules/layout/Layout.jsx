import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import cls from 'classnames';

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }
  }));

const Layout = ({children}) => {
    const classes = useStyles();

    return  (
        <AppBar position="absolute" className={cls(classes.appBar, open && classes.appBarShift)}>
        {children}
    </AppBar>
    )
};

export default Layout;