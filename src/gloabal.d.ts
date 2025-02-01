declare module '*.module.scss'{
    interface IClassNames{
        [className:string]:string,
    }
    const className:IClassNames;
    export = className;
}
declare module '*.module.styl'{
    interface IClassNames{
        [className:string]:string,
    }
    const className:IClassNames;
    export = className;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg'{
    import React from 'react';
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}