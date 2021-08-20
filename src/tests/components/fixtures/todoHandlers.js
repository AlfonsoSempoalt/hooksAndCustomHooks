export const todoHandlers = () => {
    const handleOnDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId,
        };
        return action
    };

    const handleToggle = (todoId) => {
        return {
            type: 'toggle',
            payload: todoId,
        };
    };

    const handleAddTodo = (newTodo) => {
        return {
            type: 'add',
            payload: newTodo,
        };
    };

    return {
        handleOnDelete: handleOnDelete,
        handleToggle: handleToggle,
        handleAddTodo: handleAddTodo,
    };
};
