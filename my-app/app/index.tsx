import { StyleSheet, View, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { ButtonText, Button} from '@gluestack-ui/themed'
import { Text } from 'react-native'; // Add this import

const ToDo = () => {
  const [tasks, setTasks] = useState<string[]>([]); // Specify the type of tasks
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Add Task" value={newTask} onChangeText={(text) => setNewTask(text)}></TextInput>
      <Button style={styles.addButton} onPress={addTask}>
        <ButtonText>Add task</ButtonText>
      </Button>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text style={styles.task}>{item}</Text>}
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
  },
})