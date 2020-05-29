import React, { useState, Fragment } from 'react';
/*
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import {grey400} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
*/

import { Link } from 'react-router-dom';
import { Button,
         MenuItem,
         TextField,
         Select,
         Divider,
         FormControlLabel,
         Switch
       } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { DatePicker } from '@material-ui/pickers';
import { ToggleButton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import { LocalizationProvider  } from '@material-ui/pickers';
import DateFnsUtils from '@material-ui/pickers/adapter/date-fns';



import PageBase from '../components/PageBase';

/*
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
*/

const FormPage = () => {

  const [selectedDate, handleDateChange] = useState(new Date());
  
  const styles = {
    toggleDiv: {
      maxWidth: 300,
      marginTop: 40,
      marginBottom: 5
    },
    toggleLabel: {
      color: grey[400],
      fontWeight: 100
    },
    buttons: {
      marginTop: 30,
      float: 'right'
    },
    saveButton: {
      marginLeft: 5
    }
  };

  //const classes = useStyles();
  return (
    <PageBase title="Form Page"
              navigation="Application / Form Page">
      <form>

        <TextField
          label="Name"
          fullWidth
        />
        
        {/*<FormControl className={classes.formControl} fullWidth >*/}
        <FormControl fullWidth >
        <InputLabel id="label-city">City</InputLabel>
        <Select
          labelId="label-city"
          id="demo-simple-select"
          defaultValue=''
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={0}>London</MenuItem>
          <MenuItem value={1}>Paris</MenuItem>
          <MenuItem value={2}>Rome</MenuItem>
        </Select>
        </FormControl>
        
        <LocalizationProvider dateAdapter={DateFnsUtils}>
        <DatePicker
            label='Expiration Date'
            renderInput={props => <TextField {...props} />}
            value={selectedDate}
            onChange={handleDateChange}
            inputFormat='yyyy/MM/dd'
        />
        </LocalizationProvider>

        <div style={styles.toggleDiv}>
          {/*<ToggleButton 
            label="Disabled"
            labelStyle={styles.toggleLabel}
          />*/}
          <FormControlLabel
              control={<Switch />}
              label="Disabled"
          />
        </div>

        <Divider/>

        <div style={styles.buttons}>
          <Button variant="contained" size="large" href='/'>Cancel</Button>

          <Button
              variant="contained"
              type="submit"
              color='primary'
              style={styles.saveButton}
              size="large"
          >
              Save
          </Button>
        </div>
      </form>
    </PageBase>
  );
};

export default FormPage;
