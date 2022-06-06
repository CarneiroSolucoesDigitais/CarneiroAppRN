import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Pressable} from 'react-native';
import {useTheme} from 'styled-components';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Separator from '../../components/Separator';

import {
  Container,
  Logo,
  LogoContainer,
  ForgotPasswordTitle,
  ForgotPasswordDescription,
  Content,
  Footer,
  HaveAccountLabel,
  SingInLabel,
} from './styles';
import {schemaForgotPassword} from './validations';

const ForgotPassword = () => {
  const {colors} = useTheme();
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);

  const ResetPassword = () => {
    setIsEmailSent(true);
  };

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schemaForgotPassword),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async () => {
    await handleSubmit(({email}) => {
      ResetPassword();
    })();
  };

  const {navigate} = useNavigation();

  const handleNavigateToLogin = () => {
    navigate('Login');
  };

  return (
    <Container>
      <LogoContainer>
        <Logo
          resizeMode="cover"
          source={require('../../assets/images/carneiro_marca_preto.png')}
        />
        <Separator height={60} />
        <ForgotPasswordTitle>Esqueceu sua senha?</ForgotPasswordTitle>
        <Separator height={10} />
        <ForgotPasswordDescription>
          Digite seu email para{'\n'}recuperarmos seu acesso
        </ForgotPasswordDescription>
      </LogoContainer>
      <Separator height={80} />
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
        <Separator height={50} />
        <Button
          mode="contained"
          color={colors.button}
          children="Enviar"
          onPress={onSubmit}
        />
        <Separator height={20} />
        <Footer>
          <HaveAccountLabel>Já tem uma conta?</HaveAccountLabel>
          <Separator width={5} />
          <Pressable onPress={handleNavigateToLogin}>
            <SingInLabel>Faça Login</SingInLabel>
          </Pressable>
        </Footer>
      </Content>
    </Container>
  );
};

export default ForgotPassword;
