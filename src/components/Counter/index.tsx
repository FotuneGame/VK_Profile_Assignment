import { createClassNameLiveIndicator, createClassNameDot, createClassNamesPulse } from "./util";
import {useValidatorCounter} from "./hooks";
import {IPropsCounter} from "./types";
import React from "react";


const Counter = React.memo(({
    children,
    style = "primary",
    size = 8,
    stroke=true,
    pulse=false
}:IPropsCounter) => {

    const value = useValidatorCounter(children, size);
    const classNameLI = createClassNameLiveIndicator({children,size,stroke,pulse},style);
    const classNameDot = createClassNameDot({children,size,stroke,pulse},style, value);
    const classNamesPulse = createClassNamesPulse({children,size,stroke,pulse},style);

    return(
        <div className={ classNameLI && classNameLI.join(' ')}>
            <p>{value}</p>
            <div className={ classNameDot && classNameDot.join(' ')}></div>
            <div className={ classNamesPulse && classNamesPulse[0].join(' ')}></div>
            <div className={ classNamesPulse && classNamesPulse[1].join(' ')}></div>
        </div>
    )
})

export default Counter;