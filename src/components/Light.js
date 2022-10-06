import { useState } from "react";

function Light({ name }) {
  const [light, setLight] = useState(false);

  return (
    <>
      <h2>
        {name} {light ? "ON" : "OFF"}
      </h2>
      <button onClick={() => setLight(true)} disabled={light ? true : false}>
        ON
      </button>
      <button onClick={() => setLight(false)} disabled={!light ? true : false}>
        OFF
      </button>
    </>
  );
}

export default Light;
