import React, { useContext } from "react";
import { ConterContext } from "../context/Counter";



const Count =()=>{
    // const counterState = useContext(ConterContext);
    const {increase,decrease} = useContext(ConterContext);
    return(
        <div >
            {/* <button onClick={counterState.setCount(ConterContext.count+1)}>Increment</button> */}
            {/* <button onClick={counterState.setCount(ConterContext.count-1)}>decrement</button> */}
            <button onClick={increase}>inc</button>
            <button onClick={decrease}>dec</button>
        </div>
    );
};
export default Count;
