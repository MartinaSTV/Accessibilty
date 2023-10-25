import { useState } from "react";

const Form = () => {
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState(0);

  const info = {
    message: message,
    num: number,
  };
  console.log(info);

  return (
    <section>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Telephone number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <input type="email" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
export default Form;
