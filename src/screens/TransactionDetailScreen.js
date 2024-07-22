import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Details</Text>
      <View style={styles.details}>
        <Text style={styles.label}>Merchant:</Text>
        <Text style={styles.value}>{transaction.name}</Text>
        <Text style={styles.label}>Amount:</Text>
        <Text style={styles.value}>{transaction.amount}</Text>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{transaction.date}</Text>
        <Text style={styles.label}>Place:</Text>
        <Text style={styles.value}>{transaction.location}</Text>
      </View>
      <Button title="Modify" onPress={() => console.log('Edit Transaction')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#F4F4F4',
  },
  header: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 18,
  },
  details: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    marginBottom: 15,
  },
});

export default TransactionDetailScreen;
