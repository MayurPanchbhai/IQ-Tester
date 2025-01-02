import { Page } from "./Components/Page";
import {MyQuestions } from "./MyContextData";


export default function App() {
  return (
    <MyQuestions>
      <Page/>
    </MyQuestions>
  )
}


// import { useState, React } from "react";
// import { MyContext } from "./MyContext";
// import MyComponent from "./MyComponent";

// function App() {
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <MyContext.Provider value={{ text, setText }}>
//         <MyComponent />
//       </MyContext.Provider>
//     </div>
//   );
// }