import React, { useState } from 'react'; // eslint-disable-next-line 
import { Collapse, Fade, Paper, Typography } from '@mui/material';
 // eslint-disable-next-line 
import { makeStyles } from '@mui/styles';
import AddCardorListTitle from './AddCardorListTitle'
import TrelloList from './TrelloList';

const useStyle = makeStyles(theme => ({
  title: {
   width:"300px",
   marginTop:10,
  },
  AddCardorListTitle: {
    margin:(0,1,1,1),
    padding:(5),
    background: "#ebecf0",
    "&:hover": {
      backgroundColor: "#ebecf0"
    }
   
  }

}));

const AddCardorList = ({type}) => {
  const classes = useStyle();
   // eslint-disable-next-line 
  const [open, setOpen] = useState(true);
  return (
    <div className={classes.title}>
    {/* AddCardorList */}
    <Collapse in={open}>
      <AddCardorListTitle type= {type} setOpen={setOpen}/>
    </Collapse>
    <Collapse in={!open}>
    <Paper className={classes.AddCardorListTitle} onClick={() => setOpen(true)}>
      <Typography> {
        type === "card" ? "+ Add a Card" : "+ Add a List"
      }
      </Typography>
    </Paper>
    </Collapse>
    </div>
  )
}

export default AddCardorList