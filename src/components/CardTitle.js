import React from 'react'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const useStyle = makeStyles(theme => ({
  title: {
   display:"flex",
   justifyContent:"space-around",
   margin:"10px"
  },
  titleText: {
    fontSize: "1.2rem",
    fontWeight:"bold"
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