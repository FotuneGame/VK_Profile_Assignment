import React from "react";
import {IPropsLabel} from "./types";
import {useButtonContext} from "../hooks";
import * as styl from "./label.module.styl";



const Label =  React.memo(({children}:IPropsLabel) => {

    const context = useButtonContext();

    return(
        <div className={styl.text}>
            {children}
        </div>
    )
})

export default Label;