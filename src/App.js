import './App.css';
import TrelloList from './components/TrelloList';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import AddCardorList from './components/AddCardorList';
import mockData from './components/mockdata.js';
import ContextAPI from './ContextAPI';
import uuid from 'react-uuid'


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

  const updateListTitle = (updatedTitle,listId) => {
    const list = data.lists[listId];
    console.log("update", list);
    list.title = updatedTitle;
    setData({
      ...data,
      ...data.lists,
      [listId] : list
    })
  }

  const addCard = (title, listId) => {
    //Crear id unico para cada card
    const newCardId = uuid(); 
    //Crear card new
    const newCard = { 
      id: newCardId,
      title: title
    }
    //añadir nuevo card al array de cards
    const list = data.lists[listId]
    list.cards = [...list.cards, newCard]
    setData({
      ...data,
      lists: {
        ...data.lists,
        [listId]: list
      }
    })
  }
  const addList = (title) => {
    //generar un id único para la lista nueva
    const newListId = uuid();
    setData({
      ...data,
      listIds : [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: {
          id:newListId,
          title,
          cards: []
        }
      }

    })
  }

  return (
    <ContextAPI.Provider value={{updateListTitle, addCard, addList}}>
      <section className={classes.roots}>
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
      </section>
    </ContextAPI.Provider>
  );
}

export default App;
