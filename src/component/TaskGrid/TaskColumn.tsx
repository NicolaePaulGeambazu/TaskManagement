import { DeleteButton, Description, EditButton, GridColumn, MarkCompleted, Ticket, WrapperButton } from './TaskGrid.style';
import { Task } from '../../types';
import { WrapperInline } from '../Modal/TaskModal.style';
interface TaskColumnProps {
  title: string;
  tasks: Task[];
  status: string;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
  onCompletionTask?: (task: Task) => void;
}

const TaskColumn = ({ title, tasks, status, onEditTask, onDeleteTask, onCompletionTask } : TaskColumnProps) => {
  return (
    <GridColumn>
      <h2>{title}</h2>
      {tasks
        .filter((task) => task?.status === status)
        .map((task) => (
          <Ticket key={task.id}>
            <WrapperInline>
              <h3>{task.title}</h3>
              {onCompletionTask && <MarkCompleted onClick={() => onCompletionTask(task)} />}
            </WrapperInline>
            <Description>{task.description}</Description>
            <p>Status: {task.status}</p>
            <WrapperButton>
              <EditButton onClick={() => onEditTask(task)} />
              <DeleteButton onClick={() => onDeleteTask(task.id)} />
            </WrapperButton>
          </Ticket>
        ))}
    </GridColumn>
  );
};

export default TaskColumn;