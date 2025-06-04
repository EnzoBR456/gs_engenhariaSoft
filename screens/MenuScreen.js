import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';

export default function MenuScreen({ navigation }) {
  const renderItem = ({ item }) => item;

  const menuItems = [
    <View style={styles.card}>
      <Image source={require('../assets/Insercao.png')} style={styles.icon} />
      <TouchableOpacity onPress={() => navigation.navigate('Dados')}>
        <Text style={styles.buttonText}>SENSORES</Text>
      </TouchableOpacity>
    </View>,

    <View style={styles.card}>
      <Image source={require('../assets/risco.png')} style={styles.icon} />
      <TouchableOpacity onPress={() => navigation.navigate('Riscos')}>
        <Text style={styles.buttonText}>VISUALIZAÇÃO DE RISCOS</Text>
      </TouchableOpacity>
    </View>,

    <View style={styles.card}>
      <Image source={require('../assets/historico.png')} style={styles.icon} />
      <TouchableOpacity onPress={() => navigation.navigate('Histórico')}>
        <Text style={styles.buttonText}>HISTÓRICO DE MONITORAMENTO</Text>
      </TouchableOpacity>
    </View>,

    <View style={styles.card}>
      <Image source={require('../assets/mitigacao.png')} style={styles.icon} />
      <TouchableOpacity onPress={() => navigation.navigate('Ações')}>
        <Text style={styles.buttonText}>Ações de Mitigação</Text>
      </TouchableOpacity>
    </View>,
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Principal</Text>

      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
    textAlign: 'center',
  },
});