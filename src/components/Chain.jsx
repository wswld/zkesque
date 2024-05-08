import React, { useState } from 'react';
import Note from './Note'
import Luhmann from './Luhmann';


function Chain() {
  const [paragraphs, setParagraphs] = useState([]);
  const [nextId, setNextId] = useState(0);

    const isEmpty = () => {
        if (paragraphs.length == 0) {return true} else {return false}
    }

    const addNote = (text = "") => {
        const newNote = { id: nextId, text: text };
        setParagraphs([...paragraphs, newNote]);
        setNextId(nextId+1);
    }

    const handleUpdateNote = (id, text) => {
        const updatedParagraphs = paragraphs.map(para =>
          para.id === id ? { ...para, text: text } : para
        );
        setParagraphs(updatedParagraphs);
      };

      const handleEnterPressOnParagraph = (id) => {
        handleUpdateNote(id, paragraphs.find(para => para.id === id).text);
        // addNote();
      };

    const handleAddNote = (e) => {
        if (e.key === 'Enter') {
            addNote();
        }
    };
    window.addEventListener("keydown", handleAddNote)

  return (
    <div>
    {paragraphs.length ? (
        <table>{ paragraphs ? paragraphs.map((para) => (
        <Note
          key={para.id}
          paragraph={para}
          onUpdate={(text) => handleUpdateNote(para.id, text)}
          onEnter={() => handleEnterPressOnParagraph(para.id)}
        />)):null}</table>) : (<Luhmann src={"luhmann.jpeg"} alt="Descriptive text for the image" />)}
    </div>
  );
    // <table>
    //   
    //   )): <p>Pepeska</p>}
    // </table>
//   );
}

export default Chain;