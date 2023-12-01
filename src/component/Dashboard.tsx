// DashBoard.tsx
import { Wrapper } from '../globalstyle';
import TaskGrid from './TaskGrid/TaskGrid'; // Make sure to import TaskColumn

const DashBoard = () => {
  return (
    <Wrapper>
      <TaskGrid />
    </Wrapper>
  );
};

export default DashBoard;
