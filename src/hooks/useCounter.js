import { useState } from "react";

export const useCounter = (initialValue=1, minValue) => {
    const [count, setCount] = useState(initialValue);

    //console.log("Min val " + minValue);
    let increase = () => setCount((prev) => prev + 1);
    let decrease = () => setCount((prev) => prev - 1);
    const reset = () => setCount(initialValue);    

    //si no existe un valor minimo
    if(minValue !== undefined) {
        decrease = () => setCount((prev) => {
            if(prev > minValue){
                return prev - 1;              
            } else {
                return prev;
            }
        }); 
    }    

    return {count, increase, decrease, reset}
}