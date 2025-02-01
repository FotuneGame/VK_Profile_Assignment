import React, { useState, useEffect } from "react";

export function useValidatorCounter(children:React.ReactNode | undefined){
    const [value,setValue] = useState<string>("0");
    if(!children) return value;

    useEffect(()=>{
        try{
            const numb = parseInt(children.toString());
            if(numb>=100)
                setValue("99+");
            else if(numb < 0)
                setValue("0");
            else
                setValue(numb.toString());
        }catch(err){
            setValue(children.toString().substring(0,3));
        }
    },[children])

    return value;
}