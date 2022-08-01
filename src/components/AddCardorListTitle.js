import React, { useState } from "react";
import { Paper, InputBase } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";

const useStyle = makeStyles((theme) => ({
  card: {
    width: "250px",
    margin: (0, "auto"),
    paddingBottom: 4,
  },
  input: {
    margin: 4,
  },
  confirm: {
    display: "flex",
    justifyContent: "space-between",
    margin: 10,
  },
  options: {},

  btnConfirm: {
    background: "#5aac44",
    borderRadius: "4px",
    color: "#ffffff",
    "&:hover": {
      background: "#099997",
      color: "white",
    },
  },
}));

const AddCardorListTitle = ({ type, setOpen, addCard, addList, listId }) => {
  const classes = useStyle();
  const [title, setTitle] = useState("");
  // console.log(title);

  function onClickAddCard() {
    addCard(listId, title);
  }
  function onClickAddList() {
    addList(title);
  }

  const isCard = type === "card";
  const onClickAdd = isCard ? onClickAddCard : onClickAddList;

  return (
    <>
      <Paper className={classes.card}>
        <InputBase
          multiline
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          onBlur={() => setOpen(false)}
          placeholder={
            isCard
              ? "Enter a title for this CARD"
              : "Enter a title for this LIST"
          }
          inputProps={{ className: classes.input }}
        />
      </Paper>
      <div className={classes.confirm}>
        <div className={classes.options}>
          <Button className={classes.btnConfirm} onClick={onClickAdd}>
            {isCard ? "Add CARD" : "Add LIST"}
          </Button>
          <IconButton onClick={() => setOpen(false)}>
            <ClearIcon />
          </IconButton>
        </div>
        <div className={classes.otro}>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default AddCardorListTitle;

//   <form>
// <label>
//   <input type="text" name="name" placeholder='add carr here' value={title} onChange={e => setTitle(e.currentTarget.target)}/>
// </label>
//</form>
