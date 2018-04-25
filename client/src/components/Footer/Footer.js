import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import FontIcon from 'material-ui/FontIcon';
// import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';



const Footer = () => (

<MuiThemeProvider>
    <Paper zDepth={1} style={{ marginTop: 50, display: 'flex', justifyContent: 'center' }} >
    <Badge
      badgeContent="&copy;"
      badgeStyle={{fontSize: 14}}
    >
      Jacob Luft
    </Badge>
  </Paper>
</MuiThemeProvider>

);

export default Footer;
