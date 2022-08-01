import "./App.css";
import TrelloList from "./components/TrelloList";
import { makeStyles } from "@mui/styles";
import { Fragment } from "react";
import AddCardorList from "./components/AddCardorList";
import { connect } from "react-redux";
 // eslint-disable-next-line 
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

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

  const onDragEnd = (result) => {
  console.log(result)
  }

  return (
    <Fragment className={classes.roots}>
      <DragDropContext onDragEnd={onDragEnd}>
      {/*  // eslint-disable-next-line  */}
        <Droppable droppableId='12345' type='list' direction='horizontal'> 
        {
          (provided) => (
          <div className={classes.container} {...provided.droppableProps} ref={provided.innerRef}
            >
            {listIds.map((listId, idx) => {
              const list = lists[listId];
              return <TrelloList list={list} listId={listId} key={idx} />;
            })}
            <div>
              <AddCardorList type="list" /> {provided.placeholder}
            </div>
          </div>
          )
        }
        </Droppable>
      </DragDropContext>
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
