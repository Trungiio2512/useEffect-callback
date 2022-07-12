import "./styles.css";
import { useState } from "react";

import Callback from "./callback.js";

export default function App() {
  // useState dùng dẻ mounted . unmounted
  const [type, setType] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setType(!type)}>toggle</button>
      {type && <Callback />}
    </div>
  );
}
