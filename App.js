import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/LoginandRegister/Login';
import Dashboard from './components/Dashboard/Dashboard';
import EmploymentEx from './components/Dashboard/EmploymentEx/EmploymentEx';
import EmploymentExRegister from './components/Dashboard/EmploymentEx/EmploymentExRegister';
import EmploymentView from './components/Dashboard/EmploymentEx/EmploymentView';
import HomePage from './components/HomePage/HomePage';
import ForgetPassword from './components/LoginandRegister/ForgetPassword';
import Register from './components/LoginandRegister/Register';
import EmployementExForm from './components/Dashboard/EmploymentEx/EmployementExForm';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="EmploymentEx" component={EmploymentEx} />
        <Stack.Screen name="EmploymentExRegister" component={EmploymentExRegister} />
        <Stack.Screen name="EmploymentView" component={EmploymentView} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="EmployementExForm" component={EmployementExForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
