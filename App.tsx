import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/global/styles/theme';
import SignInNavigation from './src/navigation/SignInNavigation';
import Login from './src/screens/Login';
import AuthProvider from './src/contexts/homeContexts/auth';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <SignInNavigation />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
