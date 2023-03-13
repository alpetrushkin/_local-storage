import React from "react";
import './App.css';
import {Local} from "./Local";

function App() {
   //const [value, setValue] = React.useState(0)

   //const incHandler = () => {
      //setValue(value + 1)
   //}

   //const setHandler = () => {
      //localStorage.setItem('counterValue', value.toString())
   //}

   // React.useEffect(() => {
   //    let valueAsString = localStorage.getItem('counterValue')
   //    if (valueAsString) {
   //       let newValue = JSON.parse(valueAsString)
   //       setValue(newValue)
   //    }
   // }, [])
   //
   // React.useEffect(() => {
   //    localStorage.setItem('counterValue', JSON.stringify(value))
   // }, [value])

   return (
      <div className="App">
         <Local/>
         {/*<h1>{value}</h1>*/}
         {/*<button onClick={incHandler}>inc</button>*/}
         {/*<button onClick={setHandler}>set</button>*/}
      </div>
   );
}

export default App;
