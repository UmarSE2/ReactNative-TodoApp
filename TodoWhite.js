import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const TodoWhite = () => {
    const date = new Date();

    const [todo, setTodo] = useState();
    const [data, setData] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editIndex, setEditIndex] = useState();
    const [selectedIndex, setSelectedIndex] = useState(null);

    //Add Task
    const handleAdd = () => {
        if (!todo) {
        }
        else if (!editMode) {
            setData([...data, { key: Math.random().toString(), value: todo }])
        }
        else {
            const editTodo = [...data]
            editTodo[editIndex].value = todo
            setData(editTodo)
            setEditMode(false)
        }
        setTodo('')
    }

    //Update Task
    const handleEdit = (index) => {
        setEditMode(true)
        setEditIndex(index)
        setTodo(data[index].value)
    }

    //Delete Taslk
    const handleDelete = (index) => {
        const deleteTodo = [...data]
        deleteTodo.splice(index, 1)
        setData(deleteTodo)
    }

    //Clear List
    const clearList = () => {
        setData([])
    }

    //Selected Task
    const setColor = (index) => {
        setSelectedIndex(index)
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.radiusView} />
            <View style={styles.header}>
                <Text style={styles.name}>Muhammad Umar</Text>
                <View style={{ paddingHorizontal: 30, marginTop: "7%" }}>
                    <Text style={styles.task}>{data.length} Tasks</Text>
                    <Text style={styles.date}>{date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</Text>
                </View>
                <TouchableOpacity style={styles.btnClear} onPress={clearList}>
                    <Text style={styles.btnTextClear}>Clear All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <TextInput style={styles.input} placeholder='Add Task'
                        onChangeText={text => (setTodo(text))}
                        value={todo}
                    />
                    <TouchableOpacity style={styles.btnAdd} onPress={handleAdd}>
                        <Text style={styles.btnTextAdd}>{editMode ? "\u2713" : "+"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                keyExtractor={item => item.key}
                data={data}
                renderItem={({ item, index }) => (
                    <View style={[styles.listContainer, { backgroundColor: index === selectedIndex ? '#3642c0' : "white" }]}
                        key={index} onPress={() => setColor(index)}>
                        <Text style={[styles.listData, { color: index === selectedIndex ? 'white' : "#3642c0" }]}
                            key={index} onPress={() => setColor(index)}>{item.value}</Text>
                        <TouchableOpacity style={styles.btnEdit} onPress={() => handleEdit(index)}>
                            <Text style={{ fontSize: 30, color: index === selectedIndex ? 'white' : "green" }}>{'\u270D'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnDelete} onPress={() => handleDelete(index)}>
                            <Text style={{ color: "red", fontSize: 25 }}>{'\u2715'}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    radiusView: {
        backgroundColor: "#3642c0",
        position: "absolute",
        marginTop: 170,
        width: "10%",
        height: 60,
    },
    header: {
        backgroundColor: "#3642c0",
        width: "100%",
        height: 190,
    },
    name: {
        color: "white",
        fontWeight: "bold",
        fontSize: 23,
        textAlign: "center",
        marginTop: 25,
        fontStyle: "italic"
    },
    task: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 20
    },
    btnClear: {
        backgroundColor: "white",
        width: "22%",
        height: 40,
        borderRadius: 12,
        marginLeft: "62%",
        marginTop: "27%",
        position: "absolute",
    },
    btnTextClear: {
        color: "#3642c0",
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 14,
        fontSize: 19,
    },
    date: {
        color: "lightgrey",
        fontWeight: "500",
        fontSize: 15,
        marginTop: 10,
    },
    container: {
        backgroundColor: "white",
        borderTopLeftRadius: 40,
    },
    input: {
        borderWidth: 2,
        borderColor: "#3642c0",
        borderRadius: 25,
        marginTop: 20,
        marginLeft: 15,
        marginBottom: 15,
        width: "75%",
        paddingHorizontal: 17,
        color: "black",
        fontSize: 19,
        fontWeight: "bold"
    },
    btnAdd: {
        width: "13%",
        height: 50,
        backgroundColor: "#3642c0",
        marginTop: 20,
        marginLeft: 15,
        borderRadius: 50,
    },
    btnTextAdd: {
        color: "white",
        textAlign: "center",
        fontSize: 35,
    },
    listContainer: {
        flexDirection: "row",
        borderColor: "#3642c0",
        borderWidth: 2,
        elevation: 5,
        paddingLeft: 10,
        borderRadius: 10,
        marginLeft: 15,
        marginTop: 15,
        marginRight: 15,
    },
    listData: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        width: "75%",
        paddingVertical: 12,
    },
    btnEdit: {
        alignSelf: "center",
        marginLeft: "2%"
    },
    btnDelete: {
        alignSelf: "center",
        marginLeft: "4%",
    }
})

export default TodoWhite;
