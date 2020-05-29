//import React, { PropTypes } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

//import Paper from 'material-ui/Paper';
import { Paper, List, ListItem, Avatar } from '@material-ui/core';

import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';

//import Avatar from 'material-ui/Avatar';


import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Grid } from '@material-ui/core';

import GlobalStyles from '../../styles';


const BrowserUsage = (props) => {

  const styles = {
    paper: {
      minHeight: 344,
      padding: 10
    },
    legend: {
      paddingTop: 20,
    },
    pieChartDiv: {
      height: 302,
      textAlign: 'center'
    }
  };
  
  return (
    <Paper style={styles.paper}>
      <span style={GlobalStyles.title}>Browser Usage</span>

      <div style={GlobalStyles.clear}/>

      <Grid container>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <div style={styles.pieChartDiv}>
            <ResponsiveContainer>
              <PieChart >
                <Pie
                  innerRadius={80}
                  outerRadius={130}
                  data={props.data}
                  fill="#8884d8">
                  {
                    props.data.map((item) => <Cell key={item.name} fill={item.color}/>)
                  }
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Grid>

        <Grid item xs={12} sm={4} md={4} lg={4}>
          <div style={styles.legend}>
            <div style={styles.legend}>
              <List>
                {props.data.map((item) =>
                  <ListItem button>
                      <ListItemAvatar>
                          <Avatar style={{backgroundColor:item.color}} >{item.icon}</Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={item.name}/>
                  </ListItem>
                  
                )}
              </List>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

BrowserUsage.propTypes = {
  data: PropTypes.array
};

export default BrowserUsage;
