import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';
import { Dimensions } from 'react-native';

const Book = ({ book }) => {    
    
    return (           
        <View style={{ backgroundColor:'#F2F3F4', height: Dimensions.get('window').height*0.66, width: Dimensions.get('window').width, overflow:'hidden', borderBottomColor:'#000', borderBottomWidth:2}}>
            <WebView style={{ backgroundColor:'#F2F3F4', marginBottom: 15}}
            source={{ html: book.anons }}
            scalesPageToFit={false}
        />
      </View>
    )  
}


const styles = StyleSheet.create({
    container: {
      marginBottom: 15
    }
})

export default Book