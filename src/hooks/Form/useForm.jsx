import { useState } from "react";

const useForm = (init) => {
  const [input, setInput] = useState(init);

  const inputValue = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const formReset = () => {
    setInput(init);
  };

  return { input, setInput, inputValue, formReset };
};

export default useForm;
