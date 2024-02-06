import React, { useState }  from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  //adding hook for saving note value in the app 
  const [notes,setNote] = useState([]);
  
  //creating the add note functionality
  function addNote(note){
    console.log(note)
    setNote((prevValue)=>{
      return [
        ...prevValue,note
      ]
    })
  }
    
  return (
    <div>
      <Header />
      <CreateArea noteAdd={addNote} />
      {
        notes.map((item) => {
        return <Note title = { item.title } content = { item.content } />
      })}
      <Footer />
    </div>
  );
}

export default App;
