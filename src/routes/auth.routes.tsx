import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/Signin';
import Signup from '../pages/Signup';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38'},
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={Signup} />
  </Auth.Navigator>
);

export default AuthRoutes;
