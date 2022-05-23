import { IconProps } from "./types";
import styled from "styled-components/native";

export const Container = styled.Image<Partial<IconProps>>`
  min-height: ${({ size }) => size}px;
  min-width: ${({ size }) => size}px;
  max-height: ${({ size }) => size}px;
  max-width: ${({ size }) => size}px;
`;
