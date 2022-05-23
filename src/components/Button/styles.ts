import { Mode } from './types';
import styled from "styled-components/native";

interface ContainerProps {
    readonly color: string;
    readonly borderColor: string;
    readonly mode: Mode;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    background-color: ${({color, mode}) => {
        if (mode === "outlined") {
            return "#fff"
        } 
        return color
    }};
    padding: 12px 0;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    flex-direction: row;
    border-color: ${({borderColor}) => borderColor || "transparent"};
    border-width: 1px;
    width: 100%;
    height: 68px;
`;

interface TextProps {
    readonly color: string;
    size: number;
}

export const Title = styled.Text<TextProps>`
    color: ${({color}) => color};
    font-size: ${({size}) => size || 15}px;
    align-self: center;
    font-weight: 700;
`;

export const Loading = styled.ActivityIndicator`
    margin-left: 10px;
`;

export const AbsoluteIcon = styled.View`
    position: absolute;
    left: 20px;
`;