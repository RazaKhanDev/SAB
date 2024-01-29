import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  createNavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';
import Welcome from '../screens/auth/Welcome';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import Privacy from '../screens/auth/Privacy';
import Settinglist from '../screens/settings/SettingList';
import Preferences from '../screens/Preferences';
import EditPreferences from '../screens/EditPreferences';
import PreferencesSuccess from '../screens/PreferencesSuccess';
import ForgotPassword from '../screens/auth/ForgotPassword';
import CreatePassword from '../screens/auth/CreatePassword';
import LoginTwo from '../screens/auth/LoginTwo';
import Verification from '../screens/auth/Verification';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Welcome'}>
      <Stack.Screen
        name="Welcome"
        options={{
          headerShown: false,
        }}
        component={Welcome}
      />
      <Stack.Screen
        name="Signup"
        options={{
          headerShown: false,
        }}
        component={Signup}
      />
      <Stack.Screen
        name="Login"
        options={{
          headerShown: false,
        }}
        component={Login}
      />
      <Stack.Screen
        name="Privacy"
        options={{
          headerShown: false,
        }}
        component={Privacy}
      />
      <Stack.Screen
        name="SettingList"
        options={{
          headerShown: false,
        }}
        component={Settinglist}
      />
      <Stack.Screen
        name="Preferences"
        options={{
          headerShown: false,
        }}
        component={Preferences}
      />
      <Stack.Screen
        name="EditPreferences"
        options={{
          headerShown: false,
        }}
        component={EditPreferences}
      />
      <Stack.Screen
        name="PreferencesSuccess"
        options={{
          headerShown: false,
        }}
        component={PreferencesSuccess}
      />
      <Stack.Screen
        name="ForgotPassword"
        options={{
          headerShown: false,
        }}
        component={ForgotPassword}
      />
      <Stack.Screen
        name="CreatePassword"
        options={{
          headerShown: false,
        }}
        component={CreatePassword}
      />

      <Stack.Screen
        name="LoginTwo"
        options={{
          headerShown: false,
        }}
        component={LoginTwo}
      />

      <Stack.Screen
        name="Verification"
        options={{
          headerShown: false,
        }}
        component={Verification}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return <NavigationContainer>{AuthStack()}</NavigationContainer>;
};
export default RootNavigator;
