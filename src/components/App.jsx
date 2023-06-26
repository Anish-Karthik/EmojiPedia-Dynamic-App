import React from "react";
import Entry from "./Entry";

function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {props.emojipedia.map((emoji) => (
          <Entry key={emoji.id} {...emoji} />
        ))}
      </dl>
    </div>
  );
}

export default App;
