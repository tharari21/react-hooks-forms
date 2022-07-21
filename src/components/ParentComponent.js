import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

const ParentComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstName = (event) => {
    setFirstName(() => event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(() => event.target.value);
  };

  return (
    <div>
      <Form
        firstName={firstName}
        lastName={lastName}
        onFirstNameChange={handleFirstName}
        onLastNameChange={handleLastName}
      />
      <DisplayData firstName={firstName} lastName={lastName} />
    </div>
  );
};

export default ParentComponent;
