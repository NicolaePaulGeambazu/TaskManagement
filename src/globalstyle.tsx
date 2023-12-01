import styled from 'styled-components';
import { IoMdClose } from "react-icons/io";

export const Wrapper = styled.div`
    width: 90%;
    margin: auto;
`;

export const Closebutton = styled(IoMdClose)`
cursor: pointer;
font-size: 25px;
`;


export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: #333;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
