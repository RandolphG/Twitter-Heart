import React, { useState } from "react";
import "./styles.scss";

function App() {
  const [toggle, setToggle] = useState(false);

  const onClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="stage">
      <div className={`heart ${toggle && "is-active"}`} onClick={onClick} />
    </div>
  );
}

export default App;
