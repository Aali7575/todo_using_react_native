import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import { Button, ButtonText } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native'; 
import SecondScreen from './secondscreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { width } = Dimensions.get('window');


const Stack = createNativeStackNavigator();

const Index = () => {
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Manage your tasks and everything with Todooooo!!!</Text>
      <View style={styles.imageContainer}>
      <Image source={require('../assets/images/todoimage.png')} style={styles.image} />
      <Text>Effortlessly manage your tasks and boost your productivity! </Text>
      </View>
      <Button style={styles.button} onPress={() => navigation.navigate('SecondScreen' as never)}> 
        <ButtonText>Let's go</ButtonText>
      </Button>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    padding: 20, // add some padding to avoid overlay
    marginTop: '10%',
    
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
  image: {
    width: width * 0.9,
    height: (width * 0.9) * (280 / 390), // Maintain aspect ratio
    marginVertical: 20,
  },
  imageContainer: {
    alignItems: 'center', // centers the image horizontally
    marginTop: 20, // optional: space between text and image
  },
  button: {
    position: 'absolute',
    bottom: 30,
    width: '90%',
    backgroundColor: '#DB7C26',
    paddingVertical: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
    
  },
})