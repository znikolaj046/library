import React from 'react'
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native'

const baseUrl = 'https://lermontovka-spb.ru/';

const Post = ({ post }) => {
    
  return (
    <TouchableOpacity>
      <View style={styles.post}>
        <ImageBackground style={styles.image} source={{ uri: baseUrl + post.image }}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>
              {post.name}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )  
}

const styles = StyleSheet.create({
  post: {
    width: '100%',
    marginBottom: 15,
    overflow: 'hidden'
  },
  image: {    
    width: '100%',
    height: 300
  },
  textWrap: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    alignItems: 'center',
    width: '100%'
  },
  title: {
    color: '#fff'
  }
})

export default Post