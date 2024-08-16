import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import notes from "../notes";

export default () => (
  <div>
    <Header />
    {notes.map((nt) => (
      <Note key={nt.key} title={nt.title} content={nt.content} />
    ))}
    <Footer />
  </div>
);

// export default App;
