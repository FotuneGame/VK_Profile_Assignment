import {useContext} from "react";
import { ButtonContext } from "./context";

export function useButtonContext(){
    const context = useContext(ButtonContext);
  
    if (!context.inside) {
      throw new Error("Child components of Button cannot be rendered outside the Button component!");
    }
  
    return context;
}