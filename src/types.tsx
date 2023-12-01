export interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
  }
  
  export interface TasksState {
    tasks: Task[];
  }
  
  export interface AddTaskAction {
    type: 'ADD_TASK';
    payload: Task;
  }
  
  
  export type TasksActionTypes = AddTaskAction;
  