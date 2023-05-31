import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import { View, StyleSheet, FlatList, Text, ScrollView } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import Post from "../components/ui/Post";
import { DATA } from "../data";

const baseUrl = 'http://new.lermontovka-spb.ru/ajax/get_events.php';
const source = axios.CancelToken.source();

const Events = () => {
    let EventsArray = [];

    const [isReady, setIsReady] = useState(false)
    const [events, setEvents] = useState({}) 

    useEffect(() => {
        async function prepare() {
          try {
            // Pre-load fonts, make any API calls you need to do here            
            // Artificially delay for two seconds to simulate a slow loading
            // experience. Please remove this if you copy and paste the code!
            const response = await axios.get(baseUrl, { cancelToken: source.token });
            if (response.status === 200) {
                const event_data = response.data

                setEvents(event_data)                
                setIsReady(true);
                return;
            } else {
                throw new Error("Failed to fetch users");
            }

          } catch (e) {
                console.warn(e);
          } finally {
            // Tell the application to render
            setIsReady(true);
          }
        }
    
        prepare();
    }, []);

    const onLayoutView = useCallback(async () => {
        if (isReady) {
          // This tells the splash screen to hide immediately! If we call this after
          // `setAppIsReady`, then we may see a blank screen while the app is
          // loading its initial state and rendering its first pixels. So instead,
          // we hide the splash screen once we know the root view has already
          // performed layout.
          await SplashScreen.hideAsync();
        }
    }, [isReady]);

    if (!isReady) {
        return null;
    } else {
      EventsArray = []
      Object.entries(events).map((item, index) => {
        EventsArray.push({id : item[0], name: item[1].NAME, title: item[1].PREVIEW_TEXT, image: item[1].PREVIEW_PICTURE})
      })
    }

    return (  
        <View style={styles.center} onLayout={onLayoutView}>
            <FlatList
              data={EventsArray}
              keyExtractor={post => post.id.toString()}
              renderItem={({ item }) => <Post post={item} />}              
            />

        </View>
    )
}


const styles = StyleSheet.create({
  center: {
    flex: 1,
    width:'100%',
    flexDirection:'column',
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Events;