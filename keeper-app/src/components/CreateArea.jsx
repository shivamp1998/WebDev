import React from "react";
import { textChangeRangeIsUnchanged } from "typescript";

function CreateArea(props) {
  const [isChanged,changeValue] = React.useState(false);
  const [note,setNote] = React.useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    const {name,value} = event.target;
    changeValue(true);
    setNote((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    })
  }
  function handleSubmit(event){
    props.onAdd(note);
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleChange}/>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
