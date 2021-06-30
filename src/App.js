import { useEffect, useState } from "react";
import data from "./data.json";
import "./styles.css";

export default function App() {
   const [inputVal, setInputVal] = useState("");

   const [people, setPeople] = useState(data);

   return (
      <div className="App">
         <input
            type="text"
            value={inputVal}
            onChange={(e) => {
               setInputVal(e.target.value);
            }}
            placeholder="search..."
         />
         {people
            .filter((person) => {
               if (inputVal === "") {
                  return person;
               } else if (
                
                  person.first_name
                     .toLowerCase()
                     .includes(inputVal.toLowerCase())
               ) {
                  return person;
               }
            })
            .map((p, i) => {
               return (
                  <div id={i}>
                     <p>{p.first_name}</p>
                  </div>
               );
            })}
      </div>
   );
}