import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function ActionScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>AÇÕES DE MITIGAÇÃO</Text>
      <Text style={{ marginBottom: 10 }}>• Evacuar a área em caso de risco alto.</Text>
      <Text style={{ marginBottom: 10 }}>• Plantio de vegetação para contenção do solo.</Text>
      <Text style={{ marginBottom: 10 }}>• Construção de barreiras físicas e canaletas.</Text>
      <Text style={{ marginBottom: 10 }}>• Monitoramento contínuo da área.</Text>
    </ScrollView>
  );
}