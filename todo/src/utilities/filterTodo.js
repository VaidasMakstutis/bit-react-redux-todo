const filterTodo = (todos, status) => {
    switch (status){
        case 'ACTIVE':
            return todos.filter(todo=>todo.isComplete === false)
        
        case 'DONE':
            return todos.filter(todo=>todo.isComplete === true)
        default:
            return todos;
    }
}

export default filterTodo;