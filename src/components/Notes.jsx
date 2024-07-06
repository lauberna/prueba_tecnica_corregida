import dataNotes from "../util/releaseNotes.json";
import s from "./notes.module.css";
import React from "react";
import { useState } from "react";
const Notes = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(!show)
  };
  return (
    <div className={s.notes}>
      <h1 className={s.title}>All release notes</h1>
      <div className={`${s.aux} ${show === true && s.show}`}>
        <ul className={s.note_container}>
          {dataNotes.map((note, ind) => (
            <li key={note.id} className={`${s.note} ${ind === 0 && s.selected}`}>
              {note.title}
            </li>
          ))}
        </ul>
      </div>
      <button className={s.btn} onClick={handleClick}>{show ? "Show less" : "Show more"}</button>
    </div>
  );
};

export default Notes;
