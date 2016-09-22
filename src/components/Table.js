import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TableElem from './TableElem';

const TableExampleSimple = ({infos,onClick}) => {
  let i=1;
  const elems = infos.map((info)=>
    <TableElem order={i++} key={i}  info={info} />);
  const styles={
    margin: 'auto',
    width : '80%',
    padding: '5%'
  };
  console.log(infos);
  return (
    <div  style={styles}>
    <MuiThemeProvider>
      <Table showCheckboxes={false}>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn tooltip="Ranking"><h4>#</h4></TableHeaderColumn>
            <TableHeaderColumn tooltip="FCC Avatar"><h4>Avatar</h4></TableHeaderColumn>
            <TableHeaderColumn tooltip="FCC Info"><h4>Camper Name</h4></TableHeaderColumn>
            <TableHeaderColumn tooltip="Sort By Recent">
              <RaisedButton id="recent" onClick={onClick} label="Recent Points" primary={true} />
            </TableHeaderColumn>
            <TableHeaderColumn tooltip="Sort By Alltime">
              <RaisedButton id="total" onClick={onClick} label="Total Points" primary={true}/>
            </TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {elems}
        </TableBody>
      </Table>
    </MuiThemeProvider>
    </div>
  );
};

export default TableExampleSimple;
