export type SizeCounterType = 8 | 12 | 16 | 20 |24;
export type StyleCounterType = "primary" | "secondary";

export interface IPropsCounter{
    children?: React.ReactNode,
    style?:StyleCounterType,
    size?: SizeCounterType,
    stroke?: boolean,
    pulse?: boolean
}