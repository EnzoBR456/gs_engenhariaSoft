import React from 'react';
import { ScrollView, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ActionScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>AÇÕES DE MITIGAÇÃO</Text>
      <Text style={{ marginBottom: 10 }}>• Zonas de exclusão para construção.</Text>
      <Text style={{ marginBottom: 10 }}>• Reflorestamento e plantio de vegetação para estabilizar o solo.</Text>
      <Text style={{ marginBottom: 10 }}>• Construção de muros de contenção e canaletas.</Text>
      <Text style={{ marginBottom: 10 }}>• Monitoramento contínuo da área.</Text>
      <Text style={{ marginBottom: 10 }}>• Drenos horizontais profundos para escoar água do subsolo.</Text>
      <Button title="Voltar ao Menu" onPress={() => navigation.navigate('Menu')} />
    </ScrollView>
  );
}
