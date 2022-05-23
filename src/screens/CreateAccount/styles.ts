import styled from 'styled-components/native';
import Text from '../../components/Text';

export const Container = styled.ScrollView`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_dark};
`;

export const CreateAccountLabel = styled(Text)`
    text-align: center;
    font-weight: bold;
    color: ${({theme}) =>  theme.colors.background_light};
`;

export const DescriptionAccountLabel = styled(Text)`
    text-align: center;
    color: ${({theme}) =>  theme.colors.placeholder};
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