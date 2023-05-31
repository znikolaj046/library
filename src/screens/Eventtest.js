import { View, StyleSheet, Text, ScrollView } from "react-native";
import { DATA } from "../data";

const Eventtest = ({}) => {

    return (  
        <View style={styles.center}>
            
            {DATA.map((item) => {
                <Text>1234</Text>
            })} 
        </View>
    )

}


const styles = StyleSheet.create({
    center: {
      flex: 1,
      flexDirection:'column',
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
});


export default Eventtest