import {InputStyleProps} from './types';
import styled from 'styled-components/native';
import Text from '../Text';

export const Container = styled.View``;

export const Label = styled(Text)`
  margin-bottom: 10px;
`;

export const LeftIconContainer = styled.View`
  left: 15px;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const RightIconContainer = styled.View`
  right: 15px;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Content = styled.View`
  justify-content: center;
`;

export const TextInput = styled.TextInput<InputStyleProps>`
  background-color: ${({theme}) => theme.colors.backdrop};
  color: ${({theme}) => theme.colors.background_light};
  border-radius: ${({theme}) => theme.border.radius.sm}px;
  border-color: ${({borderColor}) => borderColor};
  letter-spacing: 0;
  font-size: 13px;
  height: 65px;
  border-width: 1px;
  padding: 0 ${({hasRightIcon}) => (hasRightIcon ? 40 : 15)}px 0
    ${({hasLeftIcon}) => (hasLeftIcon ? 40 : 15)}px;
  //TODO Adicionar font-family depois de adicionar o tema das fontes
`;

export const ToggleEye = styled.Pressable`
    right: 20px;
    position: absolute;
`;
export const EyeIcon = styled.Image`
    width: 20px;
    height: 20px;
`;

export const Error = styled(Text)`
    margin-top: 10px;
    padding: 0 15px;
    color: ${({theme}) => theme.colors.attention};
`;