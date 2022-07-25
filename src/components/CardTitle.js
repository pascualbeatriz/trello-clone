import React from 'react'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import MoreHorizIcon from '@mui/icons-material';

const useStyle = makeStyles(theme => ({
  root: {
   display:"flex",
  }
}));

const CardTitle = () => {
  const classes = useStyle();
  return (
    <div className={classes.title}>
      <Typography className={classes.titleText}>
      Titulo CardTitle:To do
      </Typography>
      <MoreHorizIcon/>

    </div>
  )
}

export default CardTitle