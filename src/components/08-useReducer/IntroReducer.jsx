const initialState = [
  {
    id: 1,
    todo: 'buy some tomatoes',
    done: false,
  },
  {
    id: 2,
    todo: 'buy 3 apples',
    done: true,
  },
];

const todoReducer = (state = initialState, action) => {
    if (action.type === 'add') {
        return [...state, ...action.payload];
    }
  return state;
};

const newTodo = [
  {
    id: 3,
    todo: 'buy rice milk',
    done: false,
  },
];

const addAction = {
  type: 'add',
  payload: newTodo,
};

const todos = todoReducer(initialState, addAction);
console.log(todos);
