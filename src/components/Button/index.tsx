import React, {useState} from "react";
import {createClassNameBtn} from "./util";
import {ButtonContext} from "./context";
import {IPropsButton} from "./types"
import Counter from "./Counter";
import Loader from "./Loader";
import Label from "./Label";




function Button ({
    children,
    callback,
    style = "primary",
    size=36, 
    state="enabled", 
    focused=false
} : IPropsButton){

    const [loading,setLoading] = useState<boolean>(state==='loading');
    const className = createClassNameBtn({children,callback,style,size,state,focused});

    const wrapperClick = async () =>{
        setLoading(true);
        try{
            await callback();
        }finally{
            setLoading(false);
        }
    }

    
    return(
        <ButtonContext.Provider value={{inside:true, size, state, style}}>
            <button 
                className={className.join(" ")}
                disabled={state==="disabled"}
                onClick={()=>{wrapperClick()}}
            >
                {loading ? <Loader size={size} style={style}/> : children}
            </button>
        </ButtonContext.Provider>
    );
}



Button.Counter = Counter;
Button.Label = Label; 
export default Button;