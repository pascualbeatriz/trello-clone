import React from "react";
import { Paper, CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CardTitle from "./CardTitle";
import TrelloCard from "./TrelloCard";
import AddCardorList from "./AddCardorList";

// import CssBaseline from '@mui/material/CssBaseline';

const useStyle = makeStyles((theme) => ({
  root: {
    width: "300px",
    backgroundColor: "#ebecf0",
    margin: "10px",
  },
}));

const TrelloList = ({ list }) => {
  console.log(list, "Trellolist");
  const classes = useStyle();
  return (
    <Paper className={classes.root}>
      <CssBaseline />
      <div>TrelloList</div>
      <CardTitle title={list.title} listId={list.id} />{" "}
      {list.cards.map((card) => (
        <TrelloCard card={card} key={card.id} />
      ))}
      <AddCardorList listId={list.id} type="card" />
    </Paper>
  );
};

export default TrelloList;
