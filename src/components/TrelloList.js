import React from 'react';
import { Paper, CssBaseline} from '@mui/material';
import { makeStyles } from '@mui/styles'
import CardTitle from './CardTitle'; 
import TrelloCard from './TrelloCard';
import AddCardorList from './AddCardorList';

// import CssBaseline from '@mui/material/CssBaseline';

const useStyle = makeStyles(theme => ({
  root: {
   width: "300px",
   backgroundColor: "#ebecf0",
   margin:"10px"
  }
}));

const TrelloList = () => {
  const classes = useStyle();
  return (
    <Paper className={classes.root}>
      <CssBaseline />
      <CardTitle />
      <div>TrelloList</div>
      <TrelloCard/>
      <TrelloCard/>
      <TrelloCard/>
      <AddCardorList type="card"/>
    </Paper>
  )
}

export default TrelloList