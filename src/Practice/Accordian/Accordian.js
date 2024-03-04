import React from "react";
import AccordianMain from "./AccordianMain";

const Accordian = () => {
  const accordianList = [
    {
      title: "this is title 1",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, asperiores.",
    },
    {
      title: "this is title 2",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, asperiores.",
    },
    {
      title: "this is title 3",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, asperiores.",
    },
    {
      title: "this is title 4",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, asperiores.",
    },
  ];

  return (
    <div>
      <AccordianMain items={accordianList} />
    </div>
  );
};

export default Accordian;
