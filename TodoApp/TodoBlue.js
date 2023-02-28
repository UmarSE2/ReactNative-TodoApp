import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const TodoBlue = () => {
    const [todo, setTodo] = useState('');
    const [data, setData] = useState([]);
    const [editData, setEditData] = useState(false);
    const [editIndex, setEditIndex] = useState(-1);

    const handleAdd = () => {
        if (!todo) {
        }
        else if (!editData) {
            setData([...data, { key: Math.random().toString(), value: todo }])
        }
        else {
            const editTodo = [...data]
            editTodo[editIndex].value = todo
            setData(editTodo);
            setEditData(false)
        }
        setTodo('')
    }

    const handleEdit = (index) => {
        setEditData(true);
        setEditIndex(index);
        setTodo(data[index].value)
    }

    const handleDelete = (index) => {
        const newTodos = [...data];
        newTodos.splice(index, 1);
        setData(newTodos);
    };

    return (
        <View style={{ backgroundColor: "midnightblue", flex: 1, paddingHorizontal: 10 }}>
            <Text style={styles.header}>Todo App</Text>
            <View style={{ flexDirection: "row", marginBottom: 15 }}>
                <TextInput style={styles.input} placeholder='Add Data'
                    onChangeText={text => setTodo(text)}
                    value={todo} />
                <TouchableOpacity style={styles.btnAdd} onPress={handleAdd}>
                    <Text style={styles.btntxtAdd}>{editData ? "\u2713" : "+"}</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.item}>{item.value}</Text>
                        <TouchableOpacity style={styles.btnEdit} onPress={() => handleEdit(index)}>
                            <Text style={{ color: "green", fontSize: 28 }}>{'\u270D'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnDelete} onPress={() => handleDelete(index)}>
                            <Text style={{ color: "red", fontSize: 25 }}>{'\u2715'}</Text>
                        </TouchableOpacity>
                    </View>
                )} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        color: "white",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        margin: 15,
    },
    input: {
        backgroundColor: "white",
        color: "black",
        borderWidth: 1,
        borderRadius: 15,
        paddingLeft: 15,
        fontSize: 17,
        width: "80%",
    },
    btnAdd: {
        backgroundColor: "white",
        width: "14%",
        borderRadius: 25,
        marginLeft: 17
    },
    btntxtAdd: {
        textAlign: "center",
        color: "midnightblue",
        fontWeight: "bold",
        fontSize: 35,
    },
    itemContainer: {
        flexDirection: "row",
        backgroundColor: "white",
        marginVertical: 13,
        borderRadius: 8,
    },
    item: {
        color: "midnightblue",
        backgroundColor: "white",
        fontSize: 18,
        marginVertical: 10,
        paddingLeft: 10,
        borderRadius: 10,
        fontWeight: "bold",
        width: "77%",
    },
    btnEdit: {
        marginLeft: "2%",
        alignSelf: "center"
    },
    btnDelete: {
        marginLeft: "5%",
        alignSelf: "center"
    }
})

export default TodoBlue;