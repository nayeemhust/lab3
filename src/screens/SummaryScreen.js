// src/screens/SummaryScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryScreen = () => {
  const totalExpenses = '$1500.00';
  const totalIncome = '$3000.00';
  const balance = '$1500.00';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <View style={styles.summaryCard}>
        <Text style={styles.cardTitle}>Total Expenses</Text>
        <Text style={styles.cardValue}>{totalExpenses}</Text>
      </View>
      <View style={styles.summaryCard}>
        <Text style={styles.cardTitle}>Total Income</Text>
        <Text style={styles.cardValue}>{totalIncome}</Text>
      </View>
      <View style={styles.summaryCard}>
        <Text style={styles.cardTitle}>Balance</Text>
        <Text style={styles.cardValue}>{balance}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 24,
    color: '#6200EE',
  },
});

export default SummaryScreen;
