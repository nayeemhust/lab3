// src/screens/TransactionsListScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button, TextInput } from 'react-native';

const mockData = [
  { id: '1', name: 'Groceries', amount: '$50.00', date: '2024-07-20' },
  { id: '2', name: 'Rent', amount: '$1200.00', date: '2024-07-01' },
  // Add more mock data as needed
];

const TransactionsListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
    >
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemAmount}>{item.amount}</Text>
      <Text style={styles.itemDate}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Transactions</Text>
        <TextInput style={styles.searchBar} placeholder="Search..." />
      </View>
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('AddTransaction')}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    padding: 16,
    backgroundColor: '#6200EE',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  searchBar: {
    marginTop: 8,
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 8,
    elevation: 2,
  },
  list: {
    padding: 16,
  },
  itemContainer: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemAmount: {
    fontSize: 16,
    color: '#6200EE',
  },
  itemDate: {
    fontSize: 14,
    color: '#757575',
  },
  fab: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#FF5722',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  fabText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default TransactionsListScreen;
