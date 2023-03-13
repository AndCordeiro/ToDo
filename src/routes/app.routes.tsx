import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';

import ListScreen from '@screens/list/';
import {RoutesName} from './routesName.routes';
import {RootStackParamList} from '.';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack: FC = () => (
  <Stack.Navigator
    initialRouteName={RoutesName.List}
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#655DBB',
      },
    }}>
    <Stack.Screen
      name={RoutesName.List}
      component={ListScreen}
      options={{
        title: 'Lista de Tarefas',
      }}
    />
  </Stack.Navigator>
);

export default AppStack;
