import React, { useMemo } from "react";
import { ButtonProps } from "./types";

import { AbsoluteIcon, Container, Title } from "./styles";

const Button = ({
  onPress,
  children,
  icon,
  loading = true,
  mode = "contained",
  color = "#fffa",
  ...rest
}: ButtonProps) => {
  const colorByMode = useMemo(() => {
    return mode === "contained" ? "white" : "black";
  }, [mode]);

  return (
    <Container
      borderColor={color}
      mode={mode}
      color={color}
      onPress={onPress}
      {...rest}
    >
      {!!icon && <AbsoluteIcon>{icon}</AbsoluteIcon>}
      <Title color={colorByMode} size={15}>
        {children}
      </Title>
    </Container>
  );
};

export default Button;