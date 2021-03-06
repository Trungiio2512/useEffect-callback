import { useState, useEffect } from "react";

function Callback() {
  // useState => re-render component
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log("re-render");
  });

  return <input value={title} onChange={(e) => setTitle(e.target.value)} />;
}

export default Callback;
