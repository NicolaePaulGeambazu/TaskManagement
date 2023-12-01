import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTaskButton, GridContainer, Ticket } from './TaskGrid.style';
import { Task } from '../../types';
import { addTask, deleteTask, editTask, selectTasks } from '../../redux/taskSlice';
import TaskColumn from './TaskColumn';
import TaskModal from '../Modal/TaskModal';

const TaskGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const tasks: Task[] = useSelector(selectTasks);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddTask = (task: { title: string; description: string; status: string }) => {
    const id = Date.now();
    const taskWithId = { ...task, id };
    
    dispatch(addTask(taskWithId));
    closeModal();
  };

  const handleEditTask = (task: Task) => {
    setIsModalOpen(true);
    setTaskToEdit(task);
    dispatch(editTask(task))
  };

  const handleOnCompletionTask = (task: Task) => {

  };

  const handleDeleteTask = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div>
      <AddTaskButton onClick={openModal}>Add Task</AddTaskButton>
      <GridContainer>
        <TaskColumn title="Backlog" tasks={tasks} status="Backlog" onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} onCompletionTask={handleOnCompletionTask}/>
        <TaskColumn title="Ready to dev" tasks={tasks} status="Ready to dev" onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} onCompletionTask={handleOnCompletionTask}/>
        <TaskColumn title="In Progress" tasks={tasks} status="In progress" onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} onCompletionTask={handleOnCompletionTask}/>
        <TaskColumn title="In Review" tasks={tasks} status="In review" onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} onCompletionTask={handleOnCompletionTask}/>
        <TaskColumn title="Done" tasks={tasks} status="Done" onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} />
      </GridContainer>
      <TaskModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onAddTask={handleAddTask}
        onEditTask={handleEditTask}
        taskToEdit={taskToEdit}
      />
    </div>
  );
};

export default TaskGrid;
