import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

  const initialForm = {
  review: "",
  email: "",
  username: "",
  consistency: 0,
  colour: 0,
  logo: 0,
  bestFeatures: [],
  worstFeatures: [],
  timeSpent: []
}

export default function App() {
  const [formData, setFormData] = useState(initialForm);
  return (
    <>
      <Header />
      <Main formData = {formData} setFormData = {setFormData}/>
    </>
  );
}
