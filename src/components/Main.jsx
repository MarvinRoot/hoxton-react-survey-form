import { useState } from "react";
import AnswersItem from "./AnswersItem";
import Form from './Form'

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {}
      </section>
      <section className="main__form">{
        <Form />
      }</section>
    </main>
  );
}

export default Main;
