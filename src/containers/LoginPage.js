import React from 'react';
/*
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {grey500, white} from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router';
import ThemeDefault from '../theme-default';
*/

import { ThemeProvider } from '@material-ui/core/styles';
import { Paper, Button, Checkbox, TextField, FormControlLabel } from '@material-ui/core';
import { PersonAdd, Help } from '@material-ui/icons';
import { grey, common } from '@material-ui/core/colors';
import ThemeDefault from '../theme-default';
import { Link } from 'react-router-dom';




const LoginPage = () => {

  const styles = {
    loginContainer: {
      minWidth: 320,
      maxWidth: 400,
      height: 'auto',
      position: 'absolute',
      top: '20%',
      left: 0,
      right: 0,
      margin: 'auto'
    },
    paper: {
      padding: 20,
      overflow: 'auto'
    },
    buttonsDiv: {
      textAlign: 'center',
      padding: 10
    },
    flatButton: {
      color: grey[500]
    },
    checkRemember: {
      style: {
        float: 'left',
        maxWidth: 180,
        paddingTop: 5
      },
      labelStyle: {
        color: grey[500]
      },
      iconStyle: {
        color: grey[500],
        borderColor: grey[500],
        fill: grey[500]
      }
    },
    loginBtn: {
      float: 'right'
    },
    btn: {
      background: '#4f81e9',
      color: common["white"],
      padding: 7,
      borderRadius: 2,
      margin: 2,
      fontSize: 13
    },
    btnFacebook: {
      background: '#4f81e9'
    },
    btnGoogle: {
      background: '#e14441'
    },
    btnSpan: {
      marginLeft: 5
    },
  };

  return (
//    <ThemeProvider theme={ThemeDefault}>
      <div>
        <div style={styles.loginContainer}>

          <Paper style={styles.paper}>

            <form>
              <TextField
                label="E-mail"
                fullWidth={true}
              />
              <TextField
                label="Password"
                fullWidth={true}
                type="password"
              />

              <div style={{paddingTop: '1em'}}>
                {/*<Checkbox
                  label="Remember me"
                  style={styles.checkRemember.style}
                  labelStyle={styles.checkRemember.labelStyle}
                  iconStyle={styles.checkRemember.iconStyle}
                />*/}
                <FormControlLabel control={<Checkbox name="checkedC" />} label="Remember me" />

                <Link to="/">
                  {/*<Button
                      variant="contained"
                      label="Login"
                      primary={true}
                      style={styles.loginBtn}>*/}
                  <Button
                      variant="contained"
                      style={styles.loginBtn}
                      color='primary' >Login</Button>
                </Link>
              </div>
            </form>
          </Paper>

          <div style={styles.buttonsDiv}>
            {/* <Button
              label="Register"
              href="/"
              style={styles.flatButton}
              icon={<PersonAdd />}
            /> */}
            <Button
              style={styles.flatButton}
              href="/"
              startIcon={<PersonAdd />}>
              Register
            </Button>

            {/*<Button
              label="Forgot Password?"
              href="/"
              style={styles.flatButton}
              icon={<Help />}
            />*/}
            <Button
              label="Forgot Password?"
              href="/"
              style={styles.flatButton}
              startIcon={<Help />}
            >
              Forgot Password?
            </Button>
          </div>

          <div style={styles.buttonsDiv}>
            <Link to="/" style={{...styles.btn, ...styles.btnFacebook}}>
              <i className="fa fa-facebook fa-lg"/>
              <span style={styles.btnSpan}>Log in with Facebook</span>
            </Link>
            <Link to="/" style={{...styles.btn, ...styles.btnGoogle}}>
              <i className="fa fa-google-plus fa-lg"/>
              <span style={styles.btnSpan}>Log in with Google</span>
            </Link>
          </div>
        </div>
      </div>
//    </ThemeProvider>
  );
};

export default LoginPage;
