// creating context
import { createContext, useState } from "react";
export const ConterContext = createContext(null);

// now make the provider
export const CounterProvider = (props) => {
    const [count, setCount] =useState(5);
    const increase =()=>{
        setcount(count+1)}
    const decrease =()=>{
        setCount(count-1);}
  return (
    // <ConterContext.Provider value={{count,setCount, name:"monu"}} >
      <ConterContext.Provider value={{count,setCount,increase,decrease}}>
      {props.children}
    </ConterContext.Provider>
  );
};
