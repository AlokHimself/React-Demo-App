import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

//  ADD NOTE
// 1. Create constant that would kepp track of title and content (state management)
// pass and store new note to app component probably using array
// this array would be something with state
// Take the array and render all the individual notes as separate component

// DELETE NOTE

// it would need some kind of callback to trigger delete function
// this function would be living in App.jsx

//Probably need a filter function to delet form array
// think about how to pass id over a note component to trigger a delete
