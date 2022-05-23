import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/Login';
import CreateAccount from '../../screens/CreateAccount';
import ForgotPassword from '../../screens/ForgotPassword';

const {Navigator, Screen} = createStackNavigator();

const SignInNavigation = () => {
  return (
      <Navigator screenOptions={{headerShown: false }}
        initialRouteName='Login'
      >
          <Screen name='Login' component={Login}/>
          <Screen name='CreateAccount' component={CreateAccount}/>
          <Screen name='ForgotPassword' component={ForgotPassword}/>
      </Navigator>
  );
}

export default SignInNavigation;