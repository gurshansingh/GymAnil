import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#0c8ce9',
        flex: 1,
        paddingTop:StatusBar.currentHeight,
        padding:5
    },
});

export {
    styles
}