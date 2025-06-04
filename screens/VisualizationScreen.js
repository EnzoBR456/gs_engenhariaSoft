import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function VisualizationScreen({ navigation }) {
  const [lastEntry, setLastEntry] = useState(null);
  const [risk, setRisk] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await AsyncStorage.getItem('monitoringData');
      const parsed = data ? JSON.parse(data) : [];
      const latest = parsed[parsed.length - 1];
      setLastEntry(latest);

      if (latest) {
        const computedRisk = getRiskLevel(
          latest.humidity,
          latest.inclination,
          latest.vibration,
          latest.pluvio
        );
        setRisk(computedRisk);

        if (computedRisk === 'Alto') {
          Alert.alert(
            '🚨 Alerta',
            '• Risco alto de deslizamento de terra detectado\n• Levantando Barreira\n• Ativando Sirene\n• Por favor se afaste do local',
            [{ text: 'OK' }]
          );
        }
      }
    };

    fetchData();
  }, []);

  const getRiskLevel = (humidity, inclination, vibration, pluvio) => {
    if (humidity > 60 && inclination > 30 && vibration > 0.9 && pluvio > 30) {
      return 'Alto';
    }

    if (
      humidity > 40 ||
      inclination > 20 ||
      (vibration > 0.1 && vibration < 0.5) ||
      (pluvio > 5 && pluvio < 15)
    ) {
      return 'Moderado';
    }

    return 'Baixo';
  };

  if (!lastEntry)
    return <Text style={{ padding: 20 }}>Carregando dados...</Text>;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Nível de Risco Atual</Text>
      <Text>Cidade: {lastEntry.city}</Text>
      <Text>Umidade: {lastEntry.humidity}%</Text>
      <Text>Pluviométrico: {lastEntry.pluvio} mm/hora</Text>
      <Text>Inclinação: {lastEntry.inclination}°</Text>
      <Text>Vibração: {lastEntry.vibration} m/s²</Text>
      <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Risco: {risk}</Text>

      {risk === 'Alto' && (
        <>
          <View
            style={{
              backgroundColor: '#FFCCCC',
              padding: 10,
              borderRadius: 8,
              marginVertical: 15,
              borderWidth: 1,
              borderColor: '#FF0000',
            }}
          >
            <Text style={{ color: '#B00000', fontWeight: 'bold', textAlign: 'center' }}>
              ⚠️ Atenção: Risco alto de deslizamento! Tome precauções imediatas.
            </Text>
          </View>

          <View
            style={{
              backgroundColor: 'red',
              width: 100,
              height: 100,
              borderRadius: 50,
              alignSelf: 'center',
              marginVertical: 10,
            }}
          />
          <Text style={{ textAlign: 'center' }}>⚠️ Sirene Ativada</Text>

          <View
            style={{
              backgroundColor: 'gray',
              height: 20,
              marginVertical: 10,
            }}
          />
          <Text style={{ textAlign: 'center' }}>🚧 Barreira Ativada</Text>
        </>
      )}

      {risk === 'Moderado' && (
        <>
          <View
            style={{
              backgroundColor: 'white',
              width: 100,
              height: 100,
              borderRadius: 50,
              alignSelf: 'center',
              marginVertical: 10,
            }}
          />
          <Text style={{ textAlign: 'center' }}>⚠️ Sirene Desativada</Text>

          <View
            style={{
              backgroundColor: 'gray',
              height: 20,
              marginVertical: 10,
            }}
          />
          <Text style={{ textAlign: 'center' }}>🚧 Barreira Desativada</Text>
        </>
      )}

      {risk === 'Baixo' && (
        <>
          <View
            style={{
              backgroundColor: 'white',
              width: 100,
              height: 100,
              borderRadius: 50,
              alignSelf: 'center',
              marginVertical: 10,
            }}
          />
          <Text style={{ textAlign: 'center' }}>⚠️ Sirene Desativada</Text>

          <View
            style={{
              backgroundColor: 'gray',
              height: 20,
              marginVertical: 10,
            }}
          />
          <Text style={{ textAlign: 'center' }}>🚧 Barreira Desativada</Text>
        </>
      )}

      <Button title="Ver Histórico" onPress={() => navigation.navigate('Histórico')} />
    </View>
  );
}

