// Components/Home.jsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  color: (opacity = 1) => `rgba(255, 99, 71, ${opacity})`, // Rojo tomato
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // Optional,
  backgroundGradientFrom: 'rgba(255, 255, 255, 0)', // Fondo transparente
  backgroundGradientTo: 'rgba(255, 255, 255, 0)', // Fondo transparente
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(255, 99, 71, ${opacity})`, // Rojo tomato
      strokeWidth: 2 // Optional
    }
  ],
  legend: ["Rainy Days"] // Optional
};

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.card}>
        <Ionicons name="cash-outline" size={30} color="#333" />
        <Text style={styles.cardTitle}>Total Payments</Text>
        <Text style={styles.cardValue}>$5000</Text>
      </View>

      <View style={styles.card}>
        <Ionicons name="timer-outline" size={30} color="#333" />
        <Text style={styles.cardTitle}>Pending Payments</Text>
        <Text style={styles.cardValue}>$1500</Text>
      </View>

      <View style={styles.card}>
        <Ionicons name="checkmark-done-outline" size={30} color="#333" />
        <Text style={styles.cardTitle}>Completed Payments</Text>
        <Text style={styles.cardValue}>$3500</Text>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Monthly Payments</Text>
        <LineChart
          data={data}
          width={screenWidth * 0.9}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chart} // Estilo para el gráfico
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 3,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    color: '#333',
    marginTop: 10,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  chartContainer: {
    marginTop: 20,
    width: '90%',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff', // Mantenemos el fondo blanco
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 3,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16, // Agregamos borde redondeado al gráfico
  },
});

export default Home;
