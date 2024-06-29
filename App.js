import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, TextInput, Button, FlatList, Text, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName.trim()) {
      setTodoList([...todoList, { id: Date.now().toString(), title: taskName, status: false }]);
      setTaskName('');
    }
  };

  const handleToggleStatus = (id) => {
    setTodoList(todoList.map(task => task.id === id ? { ...task, status: !task.status } : task));
  };

  const handleDeleteTask = (id) => {
    setTodoList(todoList.filter(task => task.id !== id));
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.headerText}>ToDo App by Nazmul Alam Nayeem</Text>
      <TextInput
        style={styles.inputBox}
        placeholder="Add your Task"
        value={taskName}
        onChangeText={setTaskName}
      />
      <Button title="Add Task" onPress={handleAddTask} disabled={!taskName.trim()} />
      <FlatList
        data={todoList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskWrapper}>
            <Checkbox
              value={item.status}
              onValueChange={() => handleToggleStatus(item.id)}
              style={styles.checkbox}
            />
            <Text style={[styles.taskText, item.status && styles.completedTask]}>{item.title}</Text>
            <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
              <MaterialCommunityIcons name="delete-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
    backgroundColor: '#e0f7fa',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  taskWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: {
    fontSize: 18,
    flex: 1,
  },
  checkbox: {
    marginRight: 10,
  },
  completedTask: {
    color: 'green',
  },
});

export default App;
