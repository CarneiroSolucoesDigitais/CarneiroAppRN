import {yupResolver} from '@hookform/resolvers/yup';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import { useTheme } from 'styled-components';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Separator from '../../components/Separator';
import { schemaCreateAccount } from './validations';

import {
  Container,
  CreateAccountLabel,
  DescriptionAccountLabel,
  Content,
  HaveAccountLabel,
  Footer,
  SingInLabel,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';

const CreateAccount = () => {
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
    resolver: yupResolver(schemaCreateAccount),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
    },
  });

  const onSubmit = async () => {
    await handleSubmit(({name, email, phoneNumber, password}) => {
      login();
    })();
  };

  const { navigate } = useNavigation();

  const handleNavigateToLogin = () => {
    navigate('Login')
  }

  return (
    <Container>
      <CreateAccountLabel size={20}>Crie uma nova conta</CreateAccountLabel>
      <Separator height={10} />
      <DescriptionAccountLabel>
        Por favor preencha o formulário para continuar
      </DescriptionAccountLabel>
      <Separator height={50} />

      <Content>
        <Controller
          control={control}
          name="name"
          render={({field: {onChange, onBlur, value}}) => {
            return (
              <Input
                autoCapitalize="none"
                name="Nome"
                placeholder="Digite seu nome"
                onChange={onChange}
                onChangeText={text => setValue('name', text)}
                onBlur={onBlur}
                value={value}
                error={errors.name?.message}
              />
            );
          }}
        />
        <Separator height={10} />
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, onBlur, value}}) => {
            return (
              <Input
                autoCapitalize="none"
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
        <Separator height={10} />

        <Controller
          control={control}
          name="phoneNumber"
          render={({field: {onChange, onBlur, value}}) => {
            return (
              <Input
                autoCapitalize="none"
                name="Telefone"
                placeholder="Digite seu telefone"
                onChange={onChange}
                onChangeText={text => setValue('phoneNumber', text)}
                onBlur={onBlur}
                value={value}
                error={errors.phoneNumber?.message}
              />
            );
          }}
        />
        <Separator height={10} />

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
        <Separator height={40}/>

        <Button mode="contained" color={colors.button} children="Criar conta" onPress={onSubmit}/>
        <Separator height={20}/>
        <Footer>
          <HaveAccountLabel>Já tem uma conta?</HaveAccountLabel>
          <Separator width={5}/>
          <Pressable onPress={handleNavigateToLogin}>
            <SingInLabel>Faça Login</SingInLabel>
          </Pressable>
        </Footer>
      </Content>
    </Container>
  );
};

export default CreateAccount;
