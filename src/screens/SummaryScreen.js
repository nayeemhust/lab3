import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { mockData } from '../data/transactions';

const formatCurrency = (amount) => `$${amount.toFixed(2)}`;

const SummaryScreen = () => {
  const totalCount = mockData.length;
  const totalAmount = mockData.reduce((total, transaction) => total + parseFloat(transaction.amount.slice(1)), 0);

  const amounts = mockData.map(transaction => parseFloat(transaction.amount.slice(1)));
  const highestAmount = Math.max(...amounts);
  const lowestAmount = Math.min(...amounts);

  const highestTransaction = mockData.find(transaction => parseFloat(transaction.amount.slice(1)) === highestAmount);
  const lowestTransaction = mockData.find(transaction => parseFloat(transaction.amount.slice(1)) === lowestAmount);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Overview</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Transaction Count</Text>
        <Text style={styles.value}>{totalCount}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Total Spent</Text>
        <Text style={styles.value}>{formatCurrency(totalAmount)}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Max Spending</Text>
        <Text style={styles.value}>{formatCurrency(highestAmount)} ({highestTransaction.name})</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Min Spending</Text>
        <Text style={styles.value}>{formatCurrency(lowestAmount)} ({lowestTransaction.name})</Text>
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 8,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  value: {
    fontSize: 22,
    color: '#6200EE',
  },
});

export default SummaryScreen;
