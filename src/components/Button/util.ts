import * as styl from "./button.module.styl";
import {IPropsButton} from "./types"

export function createClassNameBtn(props:IPropsButton){
        const className = [styl.btn];
        props.style==="primary" ? className.push(styl.btn_primary) : className.push(styl.btn_secondary);
        switch(props.size){
            case 28: className.push(styl.size_28); break; //loader_size 16
            case 36: className.push(styl.size_36); break; //loader_size 20
            case 56: className.push(styl.size_56); break; //loader_size 24
            default: className.push(styl.size_36); break;
        }
        switch(props.state){
            case "disabled": className.push(styl.disabled); break;
            case "pressed": className.push(styl.active); break;
        }
        if (props.focused) className.push(styl.focused);
  
        return className;
  }