import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setNote] = React.useState([]);
  function addNote(note){
    setNote(prev => {
      return [...prev, note];
    })
  }
  function deleteNote(id){
      setNote(prev => {
        prev.filter((noteitem,i)=>{
            return i!==id;
        })
      })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      { notes &&  notes.map((note,index)=>{
        return <Note onDelete = {deleteNote} key={index} id={index} title={note.title} content={note.content}/> 
      })}
      
      <Footer />
    </div>
  );
}

export default App;
