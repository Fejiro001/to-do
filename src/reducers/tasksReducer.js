export const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "CREATE":
      return [...tasks, action.payload];
    case "EDIT":
      return tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        } else {
          return task;
        }
      });
    case "COMPLETE":
      return tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        } else {
          return task;
        }
      });
    case "DELETE":
      const updatedTask = tasks.filter((task) => task.id !== action.payload.id);
      return updatedTask;
    default:
      return tasks;
  }
};
