import React, { useState } from "react";
import { questions } from "./Api";
import Accordion from "./Accordion";
function App() {
  const [data, setdata] = useState(questions);
  return (
    <>
      <section className="sec">
        <h1 className="heading">React Interview Questions</h1>
        {data.map((curelem) => {
          const { id } = curelem;
          return <Accordion key={id} {...curelem} />;
        })}
      </section>
    </>
  );
}

export default App;
