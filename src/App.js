import "./App.css";
import TrelloList from "./components/TrelloList";
import { makeStyles } from "@mui/styles";
import { Fragment } from "react";
import AddCardorList from "./components/AddCardorList";
import { connect } from "react-redux";

const useStyle = makeStyles((theme) => ({
  roots: {
    minHeight: "100vh",
    overflowY: "auto",
  },
  container: {
    display: "flex",
  },
}));

function App({ listIds, lists }) {
  const classes = useStyle();

  return (
    <Fragment className={classes.roots}>
      <div className={classes.container}>
        {listIds.map((listId, idx) => {
          console.log(listId);
          const list = lists[listId];
          return <TrelloList list={list} key={idx} />;
        })}
        <div>
          <AddCardorList type="list" />
        </div>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    listIds: state.listIds,
    lists: state.lists,
  };
};

const ConnectedApp = connect(mapStateToProps)(App);
export default ConnectedApp;
