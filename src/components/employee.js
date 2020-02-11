import React from "react";

const Employee = ({ image, name, title }) => {
  return (
    <div className="employee">
      <img src={image.source_url} alt={name} />
      <h3>{name}</h3>
      <h4>{title}</h4>
    </div>
  );
};

export default Employee;
