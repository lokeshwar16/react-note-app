import './App.css';
import Header from './Header';
import Footer from './Footer';
import Createnote from './Createnote';
import Note from './Note';
//import Detail from './Detail';
import { useState } from 'react';

/*function createNote(terms){
  return<Note
  key = {terms.id}
  title = {terms.title}
  content = {terms.content} />
}*/

function App() {

  const[notes,setnotes] = useState([])

  function addNote(newnote){
    setnotes(prevNotes =>{
      return [...prevNotes,newnote]
    })

  }
  function deleteNote(id){
    setnotes(prevNotes =>{
      return prevNotes.filter((itemsd,index)=>{
        return index!== id;
      });
    });
  }

  return <div>
    <Header/>
    <Createnote
    onAdd={addNote}/>
    {/*Detail.map(createNote)*/}
    {notes.map((item,index)=>{
      return <Note
      key = {index}
      id = {index}
      title = {item.title}
      content = {item.content}
      onDelete={deleteNote}/>
    })}
    <Footer/>
  </div>

}

export default App;