import React, { useState } from "react";
import { Textarea } from '@mantine/core';
import { TypographyStylesProvider } from '@mantine/core';

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
        if (e.key == 'Enter' && e.shiftKey) {
            // e.preventDefault(); // Prevent default to stop from submitting form (if any)
            const cursorPosition = e.target.selectionStart;
            const textBeforeCursor = editText.substring(0, cursorPosition);
            const textAfterCursor = editText.substring(cursorPosition);
            
            // Insert the line break at the cursor position
            setEditText(textBeforeCursor + "\n" + textAfterCursor);
            // Move the cursor to the correct position after update
            setTimeout(() => {
                e.target.selectionStart = e.target.selectionEnd = cursorPosition + 1;
            }, 0);
        }
        if (e.key == 'Enter' && !e.shiftKey) {
          e.preventDefault(); // Prevent the default action of the enter key press
          onUpdate(editText);
          setIsEditing(false);
        }
      };

    return (
      <tr>
        <td>{paragraph.id}</td>
        <td>{isEditing ? (
          <Textarea
            value={editText}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyPress}
            autoFocus
          />
        ) : (
        //     <TypographyStylesProvider>
        //         <div>
        //         <p onClick={() => setIsEditing(true)}>{paragraph.text || "Empty note"}</p>
        //         </div>
        //   </TypographyStylesProvider>
          <p onClick={() => setIsEditing(true)}>{paragraph.text || "Empty note"}</p>
        )}</td>
      </tr>
    ); 
  }

export default Note;