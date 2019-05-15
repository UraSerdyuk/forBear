import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import InputBase from "@material-ui/core/InputBase";
import './style.css'








const styles = {
  root: {
    flexGrow: 1,
  },
  // menuButton: {
  //   marginLeft: -18,
  //   marginRight: 10
  // },
  // button:{

  // },

};

function DenseAppBar(props) {

  const { classes, clickBtn, getValue,random } = props;

  const handleClick = () => {
    clickBtn();
    resetInputValue();
  };
  const resetInputValue = () =>{
    let div =  document.querySelector('.input');
    let input =  div.firstElementChild;
    input.value  = '';
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" className='appBar'>

        <Toolbar variant="dense">
          <Typography className='title' variant="h6" color="inherit">
            За пивком 
          </Typography>
        </Toolbar>

        <div className="add">
          <InputBase className='input'  onChange={getValue} placeholder="Веди имя" />
          <Fab
            size="small"
            color="secondary"
            aria-label="Add"
            onClick={handleClick}
          >
            <AddIcon />
          </Fab>
         
        </div>
        
        <Button variant="contained" color="secondary" className='button' onClick={random} >
           Начать сортировку
        </Button>
      </AppBar>
    </div>
  );
}

DenseAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DenseAppBar);
