import styled from 'styled-components/native';
import Text from '../../components/Text';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_dark};
`;

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const Logo = styled.Image``;

export const ForgotPasswordTitle = styled(Text)`
    color: ${({ theme }) => theme.colors.background_light};
    font-size: 20px;
    font-weight: bold;
`;

export const ForgotPasswordDescription = styled(Text)`
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    font-weight: 600;
    text-align: center;
`;

export const Content = styled.View`
  margin: 0 20px 20px 20px;
`;

export const HaveAccountLabel = styled(Text)`
    text-align: center;
    font-weight: bold;
    color: ${({theme}) =>  theme.colors.background_light};
`;

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const SingInLabel = styled(Text)`
    text-align: center;
    font-weight: bold;
    color: ${({theme}) =>  theme.colors.button};
`;
