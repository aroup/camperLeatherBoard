import React from 'react';
import topAll from '../data/topAll';
import topRecent from '../data/topRecent';
import TableExampleSimple from './Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class MainPage extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      infos : topAll
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick (event){
    let field = event.currentTarget;
    console.log(field.id);
    if(field.id==='recent'){
      this.setState({
        infos: topRecent
      });
    }
    if(field.id==='total'){
      this.setState({
        infos: topAll
      });
    }
  }

  render(){
    return(
      <TableExampleSimple onClick={this.handleOnClick} infos={this.state.infos} />
    );
  }
}

export default MainPage;
