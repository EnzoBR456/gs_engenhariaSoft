import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../assets/icon.png')} style={styles.logo} />
        <Text style={styles.title}>
          Bem-vindo{'\n'}ao Alerta{'\n'}de{'\n'}Deslizamento
        </Text>
        <View style={styles.buttonWrapper}>
          <Button title="COMEÇAR" onPress={() => navigation.navigate('Menu')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // centraliza verticalmente
    alignItems: 'center',     // centraliza horizontalmente
    padding: 20,
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center', // centraliza elementos internamente
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonWrapper: {
    width: 150,
  },
});