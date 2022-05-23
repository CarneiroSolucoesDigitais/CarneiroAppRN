import React from "react";
import { TouchableOpacityProps } from "react-native";

export type Mode = "outlined" | "contained"

export interface ButtonProps extends TouchableOpacityProps {
    children?: string;
    color?: string;
    mode?: Mode;
    loading?: boolean;
    icon?: React.ReactNode;
}