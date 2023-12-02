// src/redux/taskSlice.tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';
import { Task } from '../types';

interface TasksState {
  tasks: Task[];
}

const loadTasksFromStorage = (): TasksState => {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : { tasks: [] };
};

const initialState: TasksState = loadTasksFromStorage();

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const { id, ...updatedFields } = action.payload;
      const updatedTasks = state.tasks.map((task) =>
        task.id === id ? { ...task, ...updatedFields } : task
      );
      state.tasks = updatedTasks;
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    completeTask: (state, action: PayloadAction<Task>) => {
      const { id, status } = action.payload;
      const index = state.tasks.findIndex((task) => task.id === id);

      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], status: 'Done' };
      }
      localStorage.setItem('tasks', JSON.stringify(state));
    },
  },
});

export const { addTask, editTask, deleteTask, completeTask } = tasksSlice.actions;
export const selectTasks = (state: RootState) => state.tasks;
export default tasksSlice.reducer;
