import { ImageProps } from "react-native";
import { NameIconTypes } from "../../constants/icons";

export interface IconOptionsProps {
  icon: NameIconTypes;
  size?: number;
  color?: string;
}

export interface IconProps extends ImageProps, IconOptionsProps {}
