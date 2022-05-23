import styled from 'styled-components/native';
import Text from '../../components/Text';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_dark};
`;

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const Logo = styled.Image``;

export const ContainerButtons = styled.View`
  align-items: center;
  justify-content: center;
  
`;

export const LoginDescription = styled(Text)`
  text-align: center;
`;

export const ForgotPasswordLabel = styled(Text)`
  text-align: right;
`;

export const FooterContainer = styled.View`
    align-items: center;
    padding-top: 20px;
`;

export const Content = styled.View`
  margin: 0 20px 20px 20px;
`;