export const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "CREATE":
      return [...tasks, action.payload];
    case "EDIT":
      return tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    case "COMPLETE":
      return tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    case "DELETE":
      return tasks.filter((task) => task.id !== action.payload.id);
    default:
      return tasks;
  }
};
