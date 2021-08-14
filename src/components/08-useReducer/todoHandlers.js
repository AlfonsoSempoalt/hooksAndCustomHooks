export const todoHandlers = (dispatch) => {
  const handleOnDelete = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId,
    };
    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId,
    });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo,
    });
  };

  return {
    handleOnDelete: handleOnDelete,
    handleToggle: handleToggle,
    handleAddTodo: handleAddTodo,
  };
};
