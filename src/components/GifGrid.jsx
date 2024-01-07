import { getGifts } from "../helpers/getGifs"
import { useState, useEffect } from "react";


export const GifGrid = ({category})=>{
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        getGifts(category);
    },[ ]);
    return (
      <>
        <h3>{category}</h3>
        <h5>{counter}</h5>
        <button onClick={()=>{
            setCounter(counter + 1);
        }}>
            +1
        </button>
      </>
    );
}