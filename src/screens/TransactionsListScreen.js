import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { mockData } from '../data/transactions';

const TransactionsListScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = mockData.filter(transaction =>
    transaction.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderTransaction = ({ item }) => (
    <TouchableOpacity
      style={styles.transactionItem}
      onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
    >
      <Text style={styles.transactionName}>{item.name}</Text>
      <Text style={styles.transactionAmount}>{item.amount}</Text>
      <Text style={styles.transactionDate}>{item.date}</Text>
      <Text style={styles.transactionLocation}>{item.location}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Transaction List</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search transactions..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderTransaction}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddTransaction')}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  header: {
    padding: 18,
    backgroundColor: '#6200EE',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 26,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  searchInput: {
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  transactionItem: {
    padding: 18,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  transactionName: {
    fontSize: 20,
    fontWeight: '500',
  },
  transactionAmount: {
    fontSize: 18,
    color: '#6200EE',
  },
  transactionDate: {
    fontSize: 16,
    color: '#757575',
  },
  transactionLocation: {
    fontSize: 16,
    color: '#616161',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#FF5722',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  addButtonText: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '700',
  },
});

export default TransactionsListScreen;
