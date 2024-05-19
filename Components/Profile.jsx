// Components/Profile.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>Juan Pérez</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Correo electrónico:</Text>
        <Text style={styles.value}>juan@example.com</Text>
      </View>
      {/* Aquí podrías agregar más información del perfil */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  profileInfo: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginRight: 10,
    color: '#333',
  },
  value: {
    fontSize: 18,
    color: '#666',
  },
});

export default Profile;
