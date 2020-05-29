//import React, {PropTypes} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/*
import Paper from 'material-ui/Paper';
import {white, pink600, pink500} from 'material-ui/styles/colors';
*/
import { Paper } from '@material-ui/core';
import { common, pink } from '@material-ui/core/colors';

import {BarChart, Bar, ResponsiveContainer, XAxis} from 'recharts';
import GlobalStyles from '../../styles';

const MonthlySales = (props) => {

  const styles = {
    paper: {
      backgroundColor: pink[600],
      height: 150
    },
    div: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '95%',
      height: 85
    },
    header: {
      color: common["white"],
      backgroundColor: pink[500],
      padding: 10
    }
  };

  return (
    <Paper style={styles.paper}>
      <div style={{...GlobalStyles.title, ...styles.header}}>Monthly Sales</div>
      <div style={styles.div}>
        <ResponsiveContainer>
          <BarChart data={props.data} >
            <Bar dataKey="uv" fill={pink[500]}/>
            <XAxis dataKey="name" stroke="none" tick={{fill: common["white"]}}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

MonthlySales.propTypes = {
  data: PropTypes.array
};

export default MonthlySales;
