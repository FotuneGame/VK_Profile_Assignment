import React, { useState, useEffect } from "react";
import {SizeCounterType} from "./types";



export function useValidatorCounter(children:React.ReactNode | undefined, size: SizeCounterType){
    const [value,setValue] = useState<string>();

    useEffect(()=>{
        if(!children || size <= 12) {
            setValue("");
            return;
        }
        try{
            const numb = parseInt(children.toString());
            if(numb>=100)
                setValue("99+");
            else if(numb < 0)
                setValue("0");
            else if (isNaN(numb))
                setValue(children.toString().substring(0,3));
            else
                setValue(numb.toString());
        }catch(err){
            setValue("");
        }
    },[children, size])

    return value;
}