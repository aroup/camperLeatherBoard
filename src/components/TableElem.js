import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import {
blue300,
indigo900,
orange200,
deepOrange300,
pink400,
purple500
} from 'material-ui/styles/colors';

const style = {margin: 5};

const TableElem = ({info,order}) => {
  let Link='https://www.freecodecamp.com/'+info.username;
  return(
    <MuiThemeProvider>
      <TableRow>
        <TableRowColumn>{order}</TableRowColumn>
        <TableRowColumn><Avatar src={info.img}/> </TableRowColumn>
        <TableRowColumn><a href={Link}>{info.username} </a></TableRowColumn>
        <TableRowColumn>{info.recent}</TableRowColumn>
        <TableRowColumn>{info.alltime}</TableRowColumn>
      </TableRow>
    </MuiThemeProvider>
  );
}

export default TableElem;
