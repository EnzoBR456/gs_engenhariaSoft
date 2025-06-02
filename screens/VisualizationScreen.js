import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function VisualizationScreen({ navigation }) {
  const [lastEntry, setLastEntry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await AsyncStorage.getItem('monitoringData');
      const parsed = data ? JSON.parse(data) : [];
      setLastEntry(parsed[parsed.length - 1]);
    };
    fetchData();
  }, []);

  const getRiskLevel = (humidity, inclination) => {
    if (humidity > 80 && inclination > 30) return 'Alto';
    if (humidity > 50 || inclination > 20) return 'Moderado';
    return 'Baixo';
  };

  if (!lastEntry) return <Text style={{ padding: 20 }}>Carregando dados...</Text>;

  const risk = getRiskLevel(lastEntry.humidity, lastEntry.inclination);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Nível de Risco Atual</Text>
      <Text>Umidade: {lastEntry.humidity}%</Text>
      <Text>Inclinação: {lastEntry.inclination}°</Text>
      <Text>Cidade: {lastEntry.city}</Text>
      <Text>Vibração: {lastEntry.vibration} m/s²</Text>
      <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Risco: {risk}</Text>

      {risk === 'Alto' && (
        <View style={{
          backgroundColor: '#FFCCCC',
          padding: 10,
          borderRadius: 8,
          marginVertical: 15,
          borderWidth: 1,
          borderColor: '#FF0000'
        }}>
          <Text style={{ color: '#B00000', fontWeight: 'bold', textAlign: 'center' }}>
            ⚠️ Atenção: Risco alto de deslizamento! Tome precauções imediatas.
          </Text>
        </View>
      )}
      <Button title="Ver Histórico" onPress={() => navigation.navigate('Histórico')} />
    </View>
  );
}
