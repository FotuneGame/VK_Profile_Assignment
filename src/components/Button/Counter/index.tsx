import { createClassNameLiveIndicator, createClassNameDot, createClassNamesPulse } from "./util";
import {useValidatorCounter} from "./hooks";
import {useButtonContext} from "../hooks";
import {IPropsCounter} from "./types";
import React from "react";


const Counter = React.memo(({
    children,
    size = 8,
    stroke=true,
    pulse=false
}:IPropsCounter) => {

    const context = useButtonContext();
    const value = useValidatorCounter(children);
    const classNameLI = createClassNameLiveIndicator({children,size,stroke,pulse},context.style);
    const classNameDot = createClassNameDot({children,size,stroke,pulse},context.style);
    const classNamesPulse = createClassNamesPulse({children,size,stroke,pulse},context.style);

    return(
        <div className={ classNameLI.join(' ')}>
            <p>{value}</p>
            <div className={ classNameDot.join(' ')}></div>
            <div className={classNamesPulse[0].join(' ')}></div>
            <div className={classNamesPulse[1].join(' ')}></div>
        </div>
    )
})

export default Counter;