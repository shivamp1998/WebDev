import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

import AddBoxIcon from '@material-ui/icons/AddBox';
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  const [newRender, RenderComponent] = useState(false);
  function handleClick(){
      RenderComponent(true);
  }

  return (
    <div>
      <form className="create-note">
        {newRender && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={newRender ? "3" : "1"}
          onClick = {handleClick}
        />
        <Zoom in={newRender}><Fab onClick={submitNote}><AddBoxIcon/></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
