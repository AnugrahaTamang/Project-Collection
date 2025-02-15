import React, { useState } from "react";

const App = () => {
  const [backgroundColor, setbackgroundColor] = useState("black")
  const [color, setcolor] = useState("white")
  const handleChange = () => {
    setbackgroundColor(backgroundColor == "black"? "white": "black")
    setcolor(color == "white"? "black": "white")
  }
  return (
    <div style={{backgroundColor, color, padding: "22px"}}>
      <button onClick={handleChange} style={{color: "black", border: `2px solid gray`}}>{backgroundColor == "black"? "white theme": "black them"}</button>
      <div>
        <h1>Intro</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          accusamus quidem, ipsa quasi pariatur nemo enim voluptatem recusandae
          qui provident earum quos corrupti facere alias fuga corporis
          repellendus repellat in atque sapiente incidunt? Corporis alias
          necessitatibus possimus deleniti, veritatis non, tempora, nesciunt
          facilis numquam deserunt minus nemo error nulla porro mollitia libero
          assumenda dolore fuga culpa est similique hic modi. Repudiandae, aut
          debitis minus tempora porro velit non reiciendis nostrum deserunt
          ipsum, quae labore delectus perspiciatis ullam iste? Earum accusantium
          sapiente alias rem! Magni beatae repellat, maxime culpa sed vero
          eligendi non totam nulla eum maiores laudantium odit ducimus
          perspiciatis.
        </p>
      </div>
    </div>
  );
};

export default App;
