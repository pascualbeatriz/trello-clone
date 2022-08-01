import React from 'react'
import { Paper } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Draggable } from 'react-beautiful-dnd';


const useStyle = makeStyles(theme => ({
  rootCard: {
   margin:10,
   padding:5
  }
}));

const TrelloCard = ({card, index}) => {
  const classes = useStyle();
  return (
    <Draggable draggableId={card.id} index={index}> 
    {
      (provided) => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Paper className={classes.rootCard}>
            <div>{card.title}</div>
          </Paper>
        </div>
      )
    }
    </Draggable>
  )
}

export default TrelloCard