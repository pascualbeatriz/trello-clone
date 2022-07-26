import React, { useState } from 'react'; // eslint-disable-next-line 
import { Collapse, Fade, Paper, Typography } from '@mui/material';
 // eslint-disable-next-line 
import { makeStyles } from '@mui/styles';
import AddCardorListTitle from './AddCardorListTitle'


const AddCardorList = () => {
   // eslint-disable-next-line 
  const [open, setOpen] = useState(true);
  return (
    <div>AddCardorList
    <Collapse in={open}>
      <AddCardorListTitle/>
    </Collapse>
    <Collapse in={!open}>
      se ejecuta cuando NO es open
    </Collapse>
    </div>
  )
}

export default AddCardorList