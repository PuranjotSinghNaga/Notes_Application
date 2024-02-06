import React, { useState } from "react";

function CreateArea(props) {

 

  const [inputText,setInput] = useState({
    title:"",
    content:""
  })


// handling change 
  function handleChange(event){
    const {name,value} = event.target;
    setInput(prevnote =>{
      return{
        ...prevnote, 
        [name]:value
      }
    });
  }

  //actions to perform after the add button is pressed 
  //addNote() function needs to be called and the Note values need to be sent back to the App.jsx
  function addButtonPressed(event){
    event.preventDefault(); //preventDefault will prevent the submit button to refresh the page on submit 
    props.noteAdd(inputText);
    setInput({
    title:"",
    content:""
  });
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={inputText.title} onChange={handleChange} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={inputText.content}/>
        <button onClick={addButtonPressed}> Add </button>
      </form>
    </div>
  );
}

export default CreateArea;
