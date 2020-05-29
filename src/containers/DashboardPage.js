import React from 'react';
/*
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
*/
import { cyan, pink, purple, orange } from '@material-ui/core/colors';
import { Assessment, Face, ThumbUp, ShoppingCart } from '@material-ui/icons';
import { Grid } from '@material-ui/core';

import InfoBox from '../components/dashboard/InfoBox';
import NewOrders from '../components/dashboard/NewOrders';
import MonthlySales from '../components/dashboard/MonthlySales';
import BrowserUsage from '../components/dashboard/BrowserUsage';
import RecentlyProducts from '../components/dashboard/RecentlyProducts';
import globalStyles from '../styles';
import Data from '../data';

const DashboardPage = () => {

  return (
    <div>
      <h3 style={globalStyles.navigation}>Application / Dashboard</h3>

       <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <InfoBox Icon={ShoppingCart}
                   color={pink[600]}
                   title="Total Profit"
                   value="1500k"
          />
        </Grid>


        <Grid item xs={12} sm={6} md={3} lg={3}>
          <InfoBox Icon={ThumbUp}
                   color={cyan[600]}
                   title="Likes"
                   value="4231"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <InfoBox Icon={Assessment}
                   color={purple[600]}
                   title="Sales"
                   value="460"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
          <InfoBox Icon={Face}
                   color={orange[600]}
                   title="New Members"
                   value="248"
          />
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <NewOrders data={Data.dashBoardPage.newOrders}/>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <MonthlySales data={Data.dashBoardPage.monthlySales}/>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <RecentlyProducts data={Data.dashBoardPage.recentProducts}/>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <BrowserUsage data={Data.dashBoardPage.browserUsage}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardPage;
