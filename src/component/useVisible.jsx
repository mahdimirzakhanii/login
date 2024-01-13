import { useState } from "react";

const useVisible = () => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return [visible, toggle];
};

export default useVisible;
