import './App.css';
import TrelloList from './components/TrelloList';
import { makeStyles } from '@mui/styles';
import { Fragment, useState } from 'react';
import AddCardorList from './components/AddCardorList';
import mockData from './components/mockdata.js';

const useStyle = makeStyles(theme => ({
  roots: {
    minHeight:"100vh",
    overflowY:"auto"
  },
  container: {
    display:"flex"
  }

}));

function App() {
  const classes = useStyle();
  const [data, setData] = useState(mockData);
  console.log(data)
  return (
    <Fragment className={classes.roots}>
    <div className={classes.container}> {
      data.listIds.map((listId,idx) => {
        console.log(listId)
        const list = data.lists[listId]
        return(
          <TrelloList list={list} key={idx}/>
        )
      })
    }
      <div>
      <AddCardorList type="list"/>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
