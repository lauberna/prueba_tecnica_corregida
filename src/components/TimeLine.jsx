import { TbTriangleFilled } from "react-icons/tb";
import data from "../util/eventsData.json";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Event from "./Event";
import "./timeLine.css";

const TimeLine = () => {
  const dataEvents = data;
  const [selectedOption, setSelectedOption] = useState("all");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const filteredEvents =
    selectedOption === "all"
      ? dataEvents
      : dataEvents.filter(
          (event) => event.chip.toLowerCase() === selectedOption
        );

  return (
    <div className="timeline_container">
      <header className="header">
        <h1>Release 6.5</h1>
        <div className="filter">
          <label className="options" htmlFor="options">
            Sort by:
          </label>
          <select
            className="select"
            id="options"
            value={selectedOption}
            onChange={handleChange}
          >
            <option value="all">All</option>
            <option value="feat">Feat</option>
            <option value="fix">Fix</option>
          </select>
          <TbTriangleFilled className="select-icon" />
        </div>
      </header>
      <div className="timeline">
          {filteredEvents.map((el, ind) => (
            <Event key={el.id} data={el} />
          ))}
      </div>
    </div>
  );
};

export default TimeLine;
