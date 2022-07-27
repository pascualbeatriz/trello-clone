import React, { useState } from 'react'
import { Typography, InputBase } from '@mui/material'
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
  },
  input: {
    fontSize: "1.2rem",
    fontWeight:"bold",
    margin:"10px",
    "&:focus": {
      backgroundColor: " #dddddd"
    }
  }

}));

const CardTitle = ({title, listId}) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleBlur = () => {
    //actualizar title a Newtitle
    updateListTitle(newTitle, listId)
    setOpen(false)
  }

  return (
    <> { open ? (
       <InputBase 
       value={newTitle}
       onChange = {e => setNewTitle(e.target.value)}
       onBlur = {handleBlur}
       autoFocus
       fullWidht
       inputProps={{className:classes.input}}
      />
    ) : (
      <div className={classes.title}>
        <Typography className={classes.titleText} 
        onClick={() => setOpen(true)}
        > 
          {title}
        </Typography>
        <MoreHorizIcon/>
      </div>
    )

    }
    
    </>
  )
}

export default CardTitle