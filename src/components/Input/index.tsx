import React, {useMemo, useState} from 'react';
import {useTheme} from 'styled-components';
import openEye from '../../assets/icons/opennedEye/Vector.png'
import closeEye from '../../assets/icons/closedEye/Vector.png'
import Text from '../Text';

import {
  Container,
  Label,
  LeftIconContainer,
  RightIconContainer,
  Content,
  TextInput,
  ToggleEye,
  EyeIcon,
  Error
} from './styles';
import {Props} from './types';

const Input = ({
  name,
  error,
  rightIcon,
  leftIcon,
  placeholder,
  secureTextEntry,
  onBlur,
  onFocus,
  ...rest
}: Props) => {
  const {colors} = useTheme();
  const [hasFocus, setHasFocus] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const borderColor = useMemo(() => {
    if (error) return colors.attention;
    if (hasFocus) return colors.primary;
    return colors.background_dark;
  }, [error, hasFocus, colors]);

  const handleShowPassword = () => {
      setShowPassword((oldState) => !oldState)
  }

  return (
    <Container>
      {!!name && <Label size={12} color={colors.background_light}>{name}</Label>}
      <Content>
        {!!leftIcon && <LeftIconContainer>{leftIcon}</LeftIconContainer>}
        <TextInput
          borderColor={borderColor}
          onFocus={e => {
            setHasFocus(false);
            onFocus?.(e);
          }}
          onBlur={e => {
            setHasFocus(false);
            onBlur?.(e);
          }}
          hasLeftIcon = {!!leftIcon}
          hasRightIcon = {!!rightIcon}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && !showPassword}
          placeholderTextColor={colors.text}
          selectionColor={colors.background_light}
          {...rest}
        />
        {!!rightIcon && <RightIconContainer>{rightIcon}</RightIconContainer>}
        {secureTextEntry && (
            <ToggleEye onPress={handleShowPassword}>
                <EyeIcon source={showPassword ? openEye : closeEye} style={{tintColor: colors.text}}/>
            </ToggleEye>
        )}
      </Content>
      {!!error && <Error size={10}>{error}</Error>}
    </Container>
  );
};

export default Input;
