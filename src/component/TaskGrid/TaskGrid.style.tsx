import styled from 'styled-components';
import { IoTrashBinOutline, IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdOutlineModeEditOutline } from "react-icons/md";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
   display: flex;
   flex-direction: column;
  }
`;

export const GridColumn = styled.div`
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 10px;
  }
`;

export const Description = styled.p`
overflow-wrap: anywhere;
`;

export const MarkCompleted = styled(IoCheckmarkDoneCircleOutline)`
cursor: pointer;
`;
export const WrapperButton = styled.div`
display: flex;
align-items: flex-end;
width: 100%;
justify-content: end;
`;
export const DeleteButton = styled(IoTrashBinOutline)`
cursor: pointer;
`;

export const EditButton = styled(MdOutlineModeEditOutline)`
cursor: pointer;
`;

export const AddTaskButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 5px;
`;

export const Ticket = styled.div`
  background-color: #ffffff;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;