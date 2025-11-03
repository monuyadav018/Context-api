// creating context
import { createContext, useState } from "react";
export const ConterContext = createContext(null);

// now make the provider
export const CounterProvider = (props) => {
    const [count, setCount] =useState(5);
  return (
    <ConterContext.Provider value={{count,setCount, name:"monu"}} >
      {props.children}
    </ConterContext.Provider>
  );
};
