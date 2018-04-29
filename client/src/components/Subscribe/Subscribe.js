import React, { Component } from "react";
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Dialog from 'material-ui/Dialog';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';


import {
    blue900,
    red900,
    grey50,
    fullWhite,
    black,
  } from 'material-ui/styles/colors';

  

class Subscribe extends Component {

    state = {
        open: false,
      };
    
      handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };

render() {

    const styles = {
      radioButton: {
        marginTop: 16,
      },
    };


    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    const radios = [];
    const plans = [ "Daily ($10)", "Monthly ($100)", "Annual ($499) Best Deal!"  ]
    for (let i = 0; i < plans.length; i++) {
      radios.push(
        <RadioButton
          key={i}
          value={`value${i + 1}`}
          label={`Option ${plans[i]}`}
          style={styles.radioButton}
        />
      );
    }

    
    return (

    <Paper zDepth={1} style={{ padding: 10, display: 'grid' }} >
<h1>3 Reasons To Subscribe</h1>
  <div>
  <Avatar
  color={fullWhite}
  backgroundColor={red900}
  size={50}
  style={{ 
    margin: 5,
    border: '1px solid #000000',
  }}
>
  1
</Avatar>Lorem ipsum dolor sit amet</div>

<div>
<Avatar
  color={black}
  backgroundColor={grey50}
  size={50}
  style={{ 
    margin: 5,
    border: '1px solid #000000',
  }}
>
  2
</Avatar>
    Lorem ipsum dolor sit amet</div>

<div>
<Avatar
  color={grey50}
  backgroundColor={blue900}
  size={50}
  style={{ 
    margin: 5,
    border: '1px solid #000000',
  }}
>
  3
</Avatar>
    Lorem ipsum dolor sit amet</div>


<RaisedButton label="Subscribe" onClick={this.handleOpen} primary={true} style={{ float: 'right' }} />
<Dialog
  title="Subscription Options"
  actions={actions}
  modal={false}
  open={this.state.open}
  onRequestClose={this.handleClose}
  autoScrollBodyContent={true}
>
  <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
    {radios}
  </RadioButtonGroup>
</Dialog>


</Paper>

);
}
}
export default Subscribe;
