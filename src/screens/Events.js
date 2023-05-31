import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import { View, StyleSheet, Text, ScrollView } from "react-native";
import * as SplashScreen from 'expo-splash-screen';

const baseUrl = 'http://new.lermontovka-spb.ru/ajax/get_events.php';

const Events = () => {
    const [isReady, setIsReady] = useState(false);  

    useEffect(() => {
        async function prepare() {
          try {
            // Pre-load fonts, make any API calls you need to do here            
            // Artificially delay for two seconds to simulate a slow loading
            // experience. Please remove this if you copy and paste the code!
            
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
    }

    return (
        <View style={styles.center} onLayout={onLayoutView}>
        <Text>This is the events screen 1234</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Events;