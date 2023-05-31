import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Text, Pressable } from 'react-native'

const Search = () => {
  const [author, setAuthor] = useState('')
  const [book, setBook] = useState('')
  const [getResults, setGetResults] = useState(false)
  const [errorText, setErrorText] = useState('');

  const pressHandler = () => {
    setErrorText('')
    if (author.trim() || book.trim()) {

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