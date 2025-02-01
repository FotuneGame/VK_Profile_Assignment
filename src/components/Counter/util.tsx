import * as styl from "./counetr.module.styl";
import type {StyleCounterType} from "./types";
import {IPropsCounter} from "./types";



export function createClassNameLiveIndicator(props:IPropsCounter,style:StyleCounterType){
    const className = [];
    style==="primary" ? className.push(styl.live_indicator_primary) : className.push(styl.live_indicator_secondary);
    switch(props.size){
        case 8: className.push(styl.size_8); break;
        case 12: className.push(styl.size_12); break;
        case 16: className.push(styl.size_16); break;
        case 20: className.push(styl.size_20); break;
        case 24: className.push(styl.size_24); break;
        default: className.push(styl.size_8); break;
    }
    className.push(styl.live_indicator);
    return className;
}



export function createClassNameDot(props:IPropsCounter,style:StyleCounterType, value:string){
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
    className.push(styl.dot);

    if(value && value.length === 1 || !value)
        className.push(styl.padding_0);

    if(props.stroke){
        switch(props.size){
            case 8: className.push(styl.dot_border_1); break;
            case 12: className.push(styl.dot_border_2); break;
            case 16: className.push(styl.dot_border_2); break;
            case 20: className.push(styl.dot_border_2); break;
            case 24: className.push(styl.dot_border_3); break;
            default: className.push(styl.dot_border_0); break;
        }
    }else 
        className.push(styl.dot_border_0);
    return className;
}



export function createClassNamesPulse(props:IPropsCounter,style:StyleCounterType){
    if(!props.pulse || props.size > 12) return;
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

    className.push(styl.pulse);
    className.push(styl.dot_border_0);

    const className2 = [...className];
    className2.push(styl.two);
    return [className, className2];
}