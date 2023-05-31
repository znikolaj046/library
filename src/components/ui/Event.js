import { View, StyleSheet, Image, Text } from "react-native";

const Event = ({name, preview_text, preview_picture}) => {

    return (
        <View>
            <Text>{name}</Text>
            <Text>{preview_text}</Text>
        </View>
    )

}

export default Event