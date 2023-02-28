import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Todo Apps</Text>
            <Text style={styles.header1}>Choose Yours</Text>
            <TouchableOpacity style={styles.btnwhite} onPress={() => navigation.navigate("Todo White")}>
                <Text style={styles.txtwhite}>Todo White</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnblue} onPress={() => navigation.navigate("Todo Blue")}>
                <Text style={styles.txtblue}>Todo Blue</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightgrey"
    },
    header: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        marginTop: "20%",
        color: "black"
    },
    header1: {
        textAlign: "center",
        fontSize: 22,
        marginTop: "5%",
        color: "black"
    },
    btnwhite: {
        backgroundColor: "white",
        width: "34%",
        height: 65,
        borderRadius: 12,
        alignSelf: "center",
        marginTop: "20%",
    },
    txtwhite: {
        color: "black",
        fontWeight: "bold",
        fontSize: 21,
        textAlign: "center",
        marginTop: 18,
    },
    btnblue: {
        backgroundColor: "midnightblue",
        width: "34%",
        height: 65,
        borderRadius: 12,
        alignSelf: "center",
        marginTop: "10%",
    },
    txtblue: {
        color: "lightgrey",
        fontWeight: "bold",
        fontSize: 21,
        textAlign: "center",
        marginTop: 18,
    },
})

export default Home;