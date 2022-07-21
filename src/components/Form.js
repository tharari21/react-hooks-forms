import React, { useState } from "react";

function Form({ firstName, lastName, onFirstNameChange, onLastNameChange }) {
  const [age, setAge] = useState("");
  const [invalidAgeMessage, setInvalidAgeMessage] = useState("");
  const handleAgeChange = (event) => {
    const newAge = parseInt(event.target.value);
    setAge(event.target.value);
    if (newAge >= 21) {
      setInvalidAgeMessage(null);
    } else {
      setInvalidAgeMessage("You must be 21 or over!");
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input type="text" value={firstName} onChange={onFirstNameChange} />
      <input type="text" value={lastName} onChange={onLastNameChange} />
      <input type="number" value={age} onChange={handleAgeChange} />
      {invalidAgeMessage && <span>{invalidAgeMessage}</span>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
