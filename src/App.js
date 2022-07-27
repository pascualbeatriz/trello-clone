import './App.css';
import TrelloList from './components/TrelloList';
import { makeStyles } from '@mui/styles';
import { Fragment, useState } from 'react';
import AddCardorList from './components/AddCardorList';
import mockData from './components/mockdata';

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
    <div className={classes.container}>
      <TrelloList />
      <TrelloList/>
      <div>
      <AddCardorList type="list"/>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
