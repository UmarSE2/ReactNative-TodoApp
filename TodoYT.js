import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View, Button } from 'react-native'

const TodoYT = () => {
    const [todos, setTodos] = useState([
        { id: 1, task: 'First Task', completed: true },
        { id: 2, task: 'Second Task', completed: true },
        { id: 3, task: 'Third Task', completed: true },
    ])

    const ListItem = ({ todo }) => {
        return (
            <View style={styles.listItem}>
                <View>
                    <Text>{todo?.task}</Text>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flexDirection: "row" }}>
                <Text style={styles.header}>Todo App</Text>
                <Text style={{ color: "red", fontSize: 25 }}>{'\u2715'}</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder={"Add Todo"}
            // onChangeText={text => setTodo(text)}
            // value={todo}
            />
            <Button title={"Add"} />
            <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
                data={todos}
                renderItem={({ item }) => <ListItem todo={item} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        color: "black",
        // textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        margin: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    },
    listItem: {
        padding: 20,
        flexDirection: "row",
        elevation: 20,
        backgroundColor: "white",
        borderRadius: 7,
        marginVertical: 10,
    }
})

export default TodoYT;
