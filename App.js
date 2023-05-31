import { StyleSheet, View } from 'react-native';
import { Navbar } from './src/Navbar'
import { Provider } from 'react-redux';
import TabNavigator from './src/navigations/TabNavigator'
import Eventtest from './src/screens/Eventtest';

export default function App() {
  return (        
    <View style={styles.body}>
      <Navbar title='Поиск книг в библиотеке им. Лермонтова' />
      <View style={styles.container}>        
        <TabNavigator />
      </View>
    </View>    
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:'#F2F3F4'
  },  
  container: {
    flex:1,
    display: 'flex',
    textAlign: 'center',    
    justifyContent:'center',
    alignContent:'center',
  }
})
