import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importação das telas
import WelcomeScreen from './screens/WelcomeScreen';
import MenuScreen from './screens/MenuScreen';
import InsertionScreen from './screens/InsertionScreen';
import VisualizationScreen from './screens/VisualizationScreen';
import HistoryScreen from './screens/HistoryScreen';
import ActionScreen from './screens/ActionScreen';

export type RootStackParamList = {
  'Boas-vindas': undefined;
  'Menu': undefined;
  'Inserção': undefined;
  'Riscos': undefined;
  'Histórico': undefined;
  'Ações': undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Boas-vindas">
        <Stack.Screen name="Boas-vindas" component={WelcomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Inserção" component={InsertionScreen} />
        <Stack.Screen name="Riscos" component={VisualizationScreen} />
        <Stack.Screen name="Histórico" component={HistoryScreen} />
        <Stack.Screen name="Ações" component={ActionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
