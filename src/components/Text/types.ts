import { TextProps } from "react-native";

export interface Props extends TextProps {
  children?: string | React.ReactNode; 
  color?: string;
  size?: number;
}
