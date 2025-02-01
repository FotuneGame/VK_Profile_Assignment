import * as styl from "./counetr.module.styl";
import type {StyleType, StateType} from "../types";
import {IPropsCounter} from "./types";



function createClassNameCounter(props:IPropsCounter,style:StyleType){
    const className = [];
    style==="primary" ? className.push(styl.primary) : className.push(styl.secondary);

    switch(props.size){
        case 8: className.push(styl.size_8); break;
        case 12: className.push(styl.size_12); break;
        case 16: className.push(styl.size_16); break;
        case 20: className.push(styl.size_20); break;
        case 24: className.push(styl.size_24); break;
        default: className.push(styl.size_8); break;
    }

    return className;
}


export function createClassNameLiveIndicator(props:IPropsCounter,style:StyleType){
    const className = createClassNameCounter(props,style);
    className.push(styl.live_indicator);
    return className;
}


export function createClassNameDot(props:IPropsCounter,style:StyleType){
    const className = createClassNameCounter(props,style);
    className.push(styl.dot);

    switch(props.size){
        case 8: className.push(styl.dot_border_1); break;
        case 12: className.push(styl.dot_border_2); break;
        case 16: className.push(styl.dot_border_2); break;
        case 20: className.push(styl.dot_border_2); break;
        case 24: className.push(styl.dot_border_3); break;
        default: break;
    }
    return className;
}


export function createClassNamesPulse(props:IPropsCounter,style:StyleType){
    const className = createClassNameCounter(props,style);

    if(props.pulse && props.size > 12)
        className.push(styl.pulse);
    const className2 = [...className];
    className2.push(styl.two);
    return [className, className2];
}