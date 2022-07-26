import React, { useState } from 'react'
import { Collapse, Fade, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'


const AddCardorList = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>AddCardorList
    <Collapse in={open}>
      <p>Se ejecuta cuando es open</p>
    </Collapse>
    <Collapse in={!open}>
      se ejecuta cuando NO es open
    </Collapse>
    </div>
  )
}

export default AddCardorList