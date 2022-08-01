import React from "react";
import { Paper, CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CardTitle from "./CardTitle";
import TrelloCard from "./TrelloCard";
import AddCardorList from "./AddCardorList";
import { Draggable, Droppable } from 'react-beautiful-dnd';

// import CssBaseline from '@mui/material/CssBaseline';

const useStyle = makeStyles((theme) => ({
  root: {
    width: "300px",
    backgroundColor: "#ebecf0",
    margin: "10px",
  },
}));

const TrelloList = ({ list, index }) => {
  console.log(list, "Trellolist");
  const classes = useStyle();
  return (
    <Draggable draggableId= {list.id} index={index}> 
    {
      (provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <Paper className={classes.root}  {...provided.dragHandleProps}>
            <CssBaseline />
            <div>TrelloList</div>
            <CardTitle title={list.title} listId={list.id} />
              <Droppable droppableId={list.id}> 
              {
                (provided) => (
                  <div>
                    {
                      list.cards.map((card,index) => (
                      <TrelloCard card={card} key={card.id} />
                    ))
                    }
                  </div>
                )
              }
              </Droppable> {provided.placeholder}

            <AddCardorList listId={list.id} type="card" /> 
          </Paper>
        </div>
      )
    }
    </Draggable>
  );
};

export default TrelloList;
