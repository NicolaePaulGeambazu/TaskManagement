// src/redux/taskSlice.tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';
import { Task } from '../types';

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const { id, ...updatedFields } = action.payload;
      const index = state.tasks.findIndex((task) => task.id === id);

      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...updatedFields };
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export const selectTasks = (state: RootState) => state.tasks;
export default tasksSlice.reducer;
