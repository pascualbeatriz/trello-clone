import React from 'react'
import { Paper } from '@mui/material'
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles(theme => ({
  rootCard: {
   margin:10,
   padding:5
  }
}));

const TrelloCard = () => {
  const classes = useStyle();
  return (
    <Paper className={classes.rootCard}>
      <div>TrelloCard</div>
    </Paper>
  )
}

export default TrelloCard