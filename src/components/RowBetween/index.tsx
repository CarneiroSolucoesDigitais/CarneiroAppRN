import React from "react";
import { Props } from "./types";

import { Container } from "./styles";

const RowBetween = ({ children, ...rest }: Props) => {
  return <Container {...rest}>{children}</Container>;
};

export default RowBetween;