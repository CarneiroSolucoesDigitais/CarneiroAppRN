import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Pressable, StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Input from '../../components/Input';
import Separator from '../../components/Separator';
import Text from '../../components/Text';
import {schemaLogin} from './validations';

import {
  Container,
  LogoContainer,
  Logo,
  ContainerButtons,
  FooterContainer,
  Content,
  LoginDescription,
  ForgotPasswordLabel
} from './styles';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const {colors} = useTheme();
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const login = () => {
    setIsLogged(true);
  };

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async () => {
    await handleSubmit(({email, password}) => {
      login();
    })();
  };

  const {navigate} = useNavigation();

  const handleNavigateToCreateAccount = () => {
    navigate('CreateAccount')
  }
  const handleNavigateToForgotAccount = () => {
    navigate('ForgotPassword')
  }

  return (
    <Container>
      <StatusBar backgroundColor={colors.background_dark} />
      <LogoContainer>
        <Logo
          resizeMode="cover"
          source={require('../../assets/images/carneiro_marca_preto.png')}
        />
        <Separator height={10} />
        <LoginDescription color={colors.text}>Digite o usuário e senha para{"\n"}fazer login</LoginDescription>
        <Separator height={10} />
      </LogoContainer>
      <Content>
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, onBlur, value}}) => {
            return (
              <Input
                autoCapitalize="none"
                keyboardType="email-address"
                name="E-mail"
                placeholder="Digite seu email"
                onChange={onChange}
                onChangeText={text => setValue('email', text)}
                onBlur={onBlur}
                value={value}
                error={errors.email?.message}
              />
            );
          }}
        />
        <Separator height={20} />
        <Controller
          control={control}
          name="password"
          render={({field: {onChange, onBlur, value}}) => {
            return (
              <Input
                autoCapitalize="none"
                name="Senha"
                placeholder="Digite sua senha"
                onChange={onChange}
                onChangeText={text => setValue('password', text)}
                onBlur={onBlur}
                value={value}
                error={errors.password?.message}
                secureTextEntry
              />
            );
          }}
        />
        <Separator height={5} />
        <Pressable onPress={handleNavigateToForgotAccount}>
          <ForgotPasswordLabel color={colors.text}>
            Esqueceu a senha?
          </ForgotPasswordLabel>
        </Pressable>
        <Separator height={70} />
        <ContainerButtons>
          <Button mode="contained" color={colors.button} children="Entrar" onPress={onSubmit}/>
          <Separator height={50} />
          {/* <Button
            mode="outlined"
            children="Entrar com a conta Google"
            icon={<Icon icon="google" />}
          /> */}
        </ContainerButtons>
        <FooterContainer>
          <Text color={colors.background_light}>Não tem uma conta ainda?</Text>
          <Pressable onPress={handleNavigateToCreateAccount}>
            <Text color={colors.button}>Criar conta</Text>
          </Pressable>
        </FooterContainer>
      </Content>
    </Container>
  );
};

export default Login;
