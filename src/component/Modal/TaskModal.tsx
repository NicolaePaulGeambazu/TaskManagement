import { useState, useEffect } from 'react';
import { Closebutton } from '../../globalstyle';
import { Task } from '../../types';
import { AddTicketButton, FormInput, FormLabel, FormSelect, FormTextarea, ModalContent, ModalOverlay, WrapperInline } from './TaskModal.style';

interface TaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onAddTask: (task: { title: string; description: string; status: string }) => void;
  onEditTask: (task: Task) => void;
  taskToEdit?: Task | null;
}

const TaskModal = ({ isOpen, onRequestClose, onAddTask, onEditTask, taskToEdit }: TaskModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('None');

  useEffect(() => {
    if (isOpen) {
      if (taskToEdit) {
        setTitle(taskToEdit.title);
        setDescription(taskToEdit.description);
        setStatus(taskToEdit.status);
      } else {
        setTitle('');
        setDescription('');
        setStatus('None');
      }
    }
  }, [isOpen, taskToEdit]);

  const handleAddTask = () => {
    const newTask = { title, description, status };

    if (!title || !description || status === 'None') {
      return;
    }

    onAddTask(newTask);
    resetState();
    onRequestClose();
  };

  const handleEditTask = () => {
    const ed = { id: taskToEdit?.id, title, description, status };
    if (taskToEdit) {
      onEditTask(Object.assign({}, taskToEdit, ed));
      resetState();
      onRequestClose();
    }
  };

  const resetState = () => {
    setTitle('');
    setDescription('');
    setStatus('None');
  };

  return (
    <>
    {isOpen && (
      <ModalOverlay>
        <ModalContent>
          <WrapperInline>
            <h2>{taskToEdit ? 'Edit Task' : 'Add Task'}</h2>
            <Closebutton onClick={onRequestClose} />
          </WrapperInline>
          <FormLabel>Title:</FormLabel>
          <FormInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
          <FormLabel>Description:</FormLabel>
          <FormTextarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description" />
          <FormLabel>Status:</FormLabel>
          <FormSelect value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="None">None</option>
            <option value="Backlog">Backlog</option>
            <option value="Ready to dev">Ready to dev</option>
            <option value="In progress">In progress</option>
            <option value="In review">In review</option>
            <option value="Done">Done</option>
          </FormSelect>
          <AddTicketButton onClick={taskToEdit ? handleEditTask : handleAddTask}>
            {taskToEdit ? 'Edit Task' : 'Add Task'}
          </AddTicketButton>
        </ModalContent>
      </ModalOverlay>
    )}
  </>
  );
};

export default TaskModal;
