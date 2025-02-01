import {createContext} from "react";
import { StyleType,SizeType,StateType } from "./types";

export const ButtonContext = createContext<{
    inside: boolean,
    style: StyleType,
    size: SizeType,
    state: StateType
}>({
    inside:false,
    style: "primary",
    state:"enabled",
    size: 36
});