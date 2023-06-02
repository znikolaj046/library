import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Text, Pressable, FlatList } from 'react-native'
import axios from 'axios';
import Book from '../components/ui/Book';
import { WebView } from 'react-native-webview';
const source = axios.CancelToken.source();

const baseUrl = 'https://lermontovka-spb.ru/ajax/search_irbis_mobile.php';

const Search = ({}) => {
  const [author, setAuthor] = useState('')
  const [book, setBook] = useState('')
  const [getResults, setGetResults] = useState({})
  const [errorText, setErrorText] = useState('');

  async function searchData() {
    const searchUrl = baseUrl + '?NAME=' + book.trim() + '&AUTHOR=' + author.trim();
      const response = await axios.get(searchUrl, { cancelToken: source.token });
      if (response.status === 200) {
          setGetResults(response.data)
          
          return;
      } else {
          console.log(response)
          console.log(searchUrl)
          throw new Error("Failed to fetch users");
      }
  }

  const pressHandler = () => {
    setErrorText('')
    if (author.trim() || book.trim()) {

      searchData()
      
      //onSubmit(value)
      //setValue('')
    } else {
      // error
      setGetResults(true)
      setErrorText('Не заполнены необходимые поля')
    }
  }

  return (
    <View style={styles.block}>
      
        <View style={styles.formgroup}>
          <TextInput
            style={styles.input}
            onChangeText={setAuthor}
            value={author}
            placeholder='Введите автора...'
          />
        </View>
        <View style={styles.formgroup}>
          <TextInput
            style={styles.input}
            onChangeText={setBook}
            value={book}
            placeholder='Введите название книги...'
          />
        </View>
        <Pressable style={styles.button} onPress={pressHandler}>
          <Text style={styles.button_text}>Поиск</Text>
        </Pressable>
      
      <View ><Text style={styles.errorText}>{errorText}</Text></View>
      

      <FlatList
        data={getResults}
        keyExtractor={book => book.id.toString()}
        renderItem={({ item }) => <Book book={item} />}              
      />

    </View>
  )
}

const styles = StyleSheet.create({
  errorText: {
    marginTop:15,
    color:'#F00',
  },
  formgroup: {
    width:'100%',
    padding:15
  },  
  block: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  input: {
    width: '100%',
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#3949ab',
    marginBottom:15
  },
  button: {
    backgroundColor:'#252F49',
    width:220,
    paddingVertical:20,    
  },
  button_text: {
    color:'#E6AB6B',
    textAlign:'center',
    width:'100%',
    fontSize:16
  }
})

export default Search;