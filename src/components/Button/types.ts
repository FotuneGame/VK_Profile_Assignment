export type StyleType = "primary" | "secondary";
export type SizeType = 28 | 36 | 56;
export type StateType = "enabled" | "pressed" | "loading" | "disabled";



export interface IPropsButton{
    children: React.ReactNode,
    style?: StyleType,
    size?: SizeType,
    state?: StateType,
    focused?: boolean,
    callback: () => void | Promise<void>;
}