import React from 'react';
/*
import {Link} from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {pink500, grey200, grey500} from 'material-ui/styles/colors';
*/

import { Link } from 'react-router-dom';
import { Table,
         TableBody,
         TableHead,
         TableCell,
         TableRow,
         Fab
       } from '@material-ui/core';
import { Create, Add } from '@material-ui/icons';
import {pink, grey } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';

import PageBase from '../components/PageBase';
import Data from '../data';

const TablePage = () => {

  const styles = {
    floatingActionButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    },
    editButton: {
      fill: grey[500]
    },
    columns: {
      id: {
        width: '10%'
      },
      name: {
        width: '40%'
      },
      price: {
        width: '20%'
      },
      category: {
        width: '20%'
      },
      edit: {
        width: '10%'
      }
    }
  };

  return (
    <PageBase title="Table Page"
              navigation="Application / Table Page">

      <div>
        <Link to="/form" >
          <Fab style={{...styles.floatingActionButton, backgroundColor:pink[500]}} >
            <Add />
          </Fab>
        </Link>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox"><Checkbox /></TableCell>
              <TableCell style={styles.columns.id}>ID</TableCell>
              <TableCell style={styles.columns.name}>Name</TableCell>
              <TableCell style={styles.columns.price}>Price</TableCell>
              <TableCell style={styles.columns.category}>Category</TableCell>
              <TableCell style={styles.columns.edit}>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data.tablePage.items.map(item =>
              <TableRow key={item.id}>
                <TableCell padding="checkbox"><Checkbox /></TableCell>
                <TableCell style={styles.columns.id}>{item.id}</TableCell>
                <TableCell style={styles.columns.name}>{item.name}</TableCell>
                <TableCell style={styles.columns.price}>{item.price}</TableCell>
                <TableCell style={styles.columns.category}>{item.category}</TableCell>
                <TableCell style={styles.columns.edit}>
                  <Link className="button" to="/form">
                    <Fab size='small'>
                      <Create  />
                    </Fab>
                  </Link>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>    
      </div>
    </PageBase>
  );
};

export default TablePage;
