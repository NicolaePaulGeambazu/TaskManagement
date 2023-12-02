import styled from 'styled-components';
import { IoMdClose } from "react-icons/io";
import { CiLogout } from "react-icons/ci";


export const Wrapper = styled.div`
    width: 90%;
    margin: auto;
`;

export const Closebutton = styled(IoMdClose)`
cursor: pointer;
font-size: 25px;
`;


export const HeaderContainer = styled.header`
  padding: 15px;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const LogOffButton = styled(CiLogout)`
  cursor: pointer;
`;

export const WrapperHeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: auto;
`;
