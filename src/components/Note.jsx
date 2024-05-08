import React, { useState } from "react";

function Note({ paragraph, onUpdate, onEnter}) {
    const [isEditing, setIsEditing] = useState(true);
    const [editText, setEditText] = useState(paragraph.text);
  
    const handleChange = (e) => {
      setEditText(e.target.value);
    };
  
    const handleBlur = () => {
      onUpdate(editText);
      setIsEditing(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault(); // Prevent the default action of the enter key press
          onUpdate(editText);
          setIsEditing(false);
        //   onEnter(); // Call the onEnter function passed as prop
        }
      };

    return (
      <tr>
        <td>{paragraph.id}</td>
        <td>{isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyPress}
            autoFocus
          />
        ) : (
          <p onClick={() => setIsEditing(true)}>{paragraph.text || "Empty note"}</p>
        )}</td>
      </tr>
    ); 
  }

export default Note;