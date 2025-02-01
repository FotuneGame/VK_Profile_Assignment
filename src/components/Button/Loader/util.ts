import * as styl from "./loader.module.styl";

export function createClassNameLoader(
    style = "primary",
    size = 36, 
  ){
        const className = [styl.loader];
        style==="primary" ? className.push(styl.primary) : className.push(styl.secondary);
        switch(size){
            case 28: className.push(styl.size_28); break;
            case 36: className.push(styl.size_36); break;
            case 56: className.push(styl.size_56); break;
            default: className.push(styl.size_36); break;
        }
  
        return className;
  }