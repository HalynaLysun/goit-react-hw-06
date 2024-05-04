import { useState } from "react";

export default function SearchBox() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };
  console.log(inputValue);

  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" value={inputValue} onChange={handleChange} />
    </>
  );
}
