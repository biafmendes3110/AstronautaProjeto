import { StatusBar } from 'expo-status-bar';
import {Text, View, Image } from 'react-native';
import { styles } from './AppStyle';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Astronauta</Text>
      <Image style= {styles.imagem}
      source={require('./assets/astronauta.jpg')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

