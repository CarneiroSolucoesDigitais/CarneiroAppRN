import React from "react";
import icons from "../../constants/icons";
import { Container } from "./styles";
import { IconProps } from "./types";

export const Icon = ({
  icon,
  color,
  size = 20,
  style,
}: Omit<IconProps, "source">) => {
  if (color)
    return (
      <Container
        size={size}
        source={icons[icon]}
        style={[{ tintColor: color }, style]}
        resizeMode="contain"
      />
    );

  return (
    <Container
      size={size}
      source={icons[icon]}
      style={style}
      resizeMode="contain"
    />
  );
};

export default Icon;
