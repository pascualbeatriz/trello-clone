import React from 'react';
import { Paper, CssBaseline } from '@mui/material';
import CardTitle from './CardTitle'; 
// import CssBaseline from '@mui/material/CssBaseline';

const TrelloList = () => {
  return (
    <Paper>
      <CssBaseline />
      <CardTitle />
      <div>TrelloList</div>
      <TrelloCard/>
    </Paper>
  )
}

export default TrelloList