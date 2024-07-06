import Fade from "react-reveal/Fade";
import React from "react";
import "./timeLine.css";
const Event = ({ data }) => {
  const handleVisibilityChange = (inView, entry) => {
    if (inView) {
      console.log(`Element ${data.title} has entered the view.`);
    } else {
      console.log(`Element ${data.title} has left the view.`);
    }
  };
  return (
    <div className="event">
      <div className="dot"></div>
      <Fade onVisibilityChange={handleVisibilityChange} cascade={true} fraction={.5} top distance="2%" duration={700}>
        <div className="event_content">
          <h2>{data.title}</h2>
          <div className="type_post">
            <span className={`chip ${data.chip === "Fix" ? "fix" : "feat"}`}>
              {data.chip}
            </span>
            <span className="date">{data.date}</span>
          </div>
          <p className="description">{data.description}</p>
          {data.list && (
            <ul className="data_list">
              {data.list.map((el, ind) => {
                return (
                  <li key={ind} className="liElement">
                    {el}
                  </li>
                );
              })}
            </ul>
          )}
          {data.image && <img className="img" src={data.image} alt="event" />}
        </div>
      </Fade>
    </div>
  );
};

export default Event;
