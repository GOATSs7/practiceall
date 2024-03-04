import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import "./Accoedian.css";
const AccordianMain = ({ items }) => {
  // states
  const [activeIndex, setActiveIndex] = useState(null);

  // handle click func
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? "null" : index);
  };

  return (
    <div className="accordian-container">
      {items.map((item, index) => (
        <div key={index} className="accordian-item">
          <div className="accordian-title">
            <h1> {item.title} </h1>
            <div className="toggle-icon" onClick={() => handleClick(index)}>
              {index === activeIndex ? <SlArrowUp /> : <SlArrowDown />}
            </div>
          </div>

          {index === activeIndex && (
            <div className="accordian-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordianMain;
