import React from "react";
import { createClassNameLoader } from "./util";
import {IPropsLoader} from "./types";



const Loader = React.memo(({style,size}:IPropsLoader) =>{

    const className = createClassNameLoader(style,size);

    return(
        <div className={className.join(" ")} />
    )
})

export default Loader;