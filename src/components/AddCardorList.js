import React, { useState } from "react";
import { Collapse, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddCardorListTitle from "./AddCardorListTitle";
import { connect } from "react-redux";
import { addCard, addList } from "../redux/actions";

const useStyle = makeStyles((theme) => ({
  title: {
    width: "300px",
    marginTop: 10,
  },
  AddCardorListTitle: {
    margin: (0, 1, 1, 1),
    padding: 5,
    background: "#ebecf0",
    "&:hover": {
      backgroundColor: "#ebecf0",
    },
  },
}));

const AddCardorList = ({ type, addCard, addList, listId }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(true);
  return (
    <div className={classes.title}>
      <Collapse in={open}>
        <AddCardorListTitle
          listId={listId}
          type={type}
          setOpen={setOpen}
          addCard={addCard}
          addList={addList}
        />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.AddCardorListTitle}
          onClick={() => setOpen(true)}
        >
          <Typography>
            {type === "card" ? "+ Add a Card" : "+ Add a List"}
          </Typography>
        </Paper>
      </Collapse>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (listId, cardTitle) => {
      dispatch(addCard(listId, cardTitle));
    },
    addList: (listTitle) => {
      dispatch(addList(listTitle));
    },
  };
};
const ConnectedAddCardorList = connect(null, mapDispatchToProps)(AddCardorList);
export default ConnectedAddCardorList;
