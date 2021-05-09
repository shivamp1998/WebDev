import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notelist,AddNote] = React.useState([]);
  function addNote(note){
    
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
