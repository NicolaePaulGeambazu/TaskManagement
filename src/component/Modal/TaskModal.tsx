import { useState, useEffect } from 'react';
import { Closebutton } from '../../globalstyle';
import { Task } from '../../types';
import { AddTicketButton, ModalContent, ModalOverlay, WrapperInline } from './TaskModal.style';
import DataEntry from '../DataEntry/DataEntry';
import Dropdown from '../Dropdown/Dropdown';

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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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
      // Clear errors when opening the modal
      setErrors({});
    }
  }, [isOpen, taskToEdit]);

  const validateForm = () => {
    const validationErrors: { [key: string]: string } = {};
    console.log(status);
    if (!title.trim()) {
      validationErrors.title = 'Title cannot be empty';
    }

    if (!description.trim()) {
      validationErrors.description = 'Description cannot be empty';
    }

    if (status === 'None' || status === undefined) {
      validationErrors.status = 'Please select a status';
    }

    return Object.keys(validationErrors).length === 0 ? null : validationErrors;
  };

  const handleAddTask = () => {
    const validationErrors = validateForm();
    if (!validationErrors) {
      const newTask = { title, description, status };
      onAddTask(newTask);
      resetState();
      onRequestClose();
    } else {
      // Set validation errors in state
      setErrors(validationErrors);
    }
  };

  const handleEditTask = () => {
    const validationErrors = validateForm();
    if (!validationErrors) {
      const ed = { id: taskToEdit?.id, title, description, status };
      if (taskToEdit) {
        onEditTask(Object.assign({}, taskToEdit, ed));
        resetState();
        onRequestClose();
      }
    } else {
      // Set validation errors in state
      setErrors(validationErrors);
    }
  };

  const resetState = () => {
    setTitle('');
    setDescription('');
    setStatus('None');
    setErrors({});
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
            <DataEntry label="Title" value={title} onChange={setTitle} placeholder="Enter title" error={errors.title} />
            <DataEntry label="Description" value={description} onChange={setDescription} placeholder="Enter description" error={errors.description} />
            <Dropdown label="Status" value={status} onChange={setStatus} options={['None', 'Backlog', 'Ready to dev', 'In progress', 'In review', 'Completed']} error={errors.status} />
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
