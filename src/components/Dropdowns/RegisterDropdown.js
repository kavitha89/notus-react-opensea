import React from "react";
import Select from "react-dropdown-select";
import "react-dropdown/style.css";

const RegisterDropdown = () => {
  const options = [{"label": "Student", "value": "Student"}, {"label": "glaciologist", "value": "glaciologist"}, {"label": "Civilian", "value": "Civilian"}];

  return (
    <>
      <Select
        options={options}
        values={[]}
        onChange={(value) => console.log(value)}
      />
    </>
  );
};
export default RegisterDropdown;
