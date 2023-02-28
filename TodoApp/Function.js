//Add Task
const handleAdd = (data) => {
    if (!todo) {
        setError(true);
    }
    else if (!editMode) {
        setData([...data, { key: Math.random().toString(), value: todo }])
        setError(false);
    }
    else {
        const editTodo = [...data]
        editTodo[editIndex].value = todo
        setData(editTodo)
        setEditMode(false)
        setError(false);
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
    setError(false);
}

// export { handleAdd, handleEdit, handleDelete, clearList }