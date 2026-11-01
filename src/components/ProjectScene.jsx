import React, { useState } from "react";
import { sceneMarkup } from "../lib/project-scenes.js";
export default function ProjectScene({ type }) {
  const [run, setRun] = useState(0);
  return <div className="project-scene">
    <div key={run} dangerouslySetInnerHTML={{ __html: sceneMarkup(type) }} />
    <div className="scene-toolbar"><p>Concept illustration · not a live simulation</p><button type="button" className="scene-replay" onClick={() => setRun(value => value + 1)}>↻ Replay animation</button></div>
  </div>;
}
