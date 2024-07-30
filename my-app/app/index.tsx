import { StyleSheet, View, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { ButtonText, Button} from '@gluestack-ui/themed'
import { Text } from 'react-native'; // Add this import

const ToDo = () => {
  const [tasks, setTasks] = useState<string[]>([]); // Specify the type of tasks
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, { text: newTask, completed: false, deleted: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, idx) => {
      if (idx === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Add Task" value={newTask} onChangeText={(text) => setNewTask(text)}></TextInput>
      <Button style={styles.addButton} onPress={addTask}>
        <ButtonText>Add task</ButtonText>
      </Button>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <View style={styles.task}>
            <TouchableOpacity onPress={() => toggleTaskCompletion(index)}>
              <Text style={[styles.taskText, { textDecorationLine: item.completed ? 'line-through' : 'none' }]}>
                {item.text}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTask(index)}>
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default ToDo

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '20%', // Changed marginTop to 20% to leave space at the top
    height: height, // Set height to full screen height
    width: width, // Set width to full screen width
  },
  textInput: {
    width: '90%',
    height: '8%', // Set height as a percentage of the screen height
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: '4%', // Set padding as a percentage of the screen width
    paddingVertical: '2%', // Set padding as a percentage of the screen height
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addButton: {
    padding: 10, // Added padding to the button
    backgroundColor: 'red', // Changed button color to red
  },
  task: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  deleteButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 25,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 20,
  },
})