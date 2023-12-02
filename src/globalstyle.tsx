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
  color: #fff;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const LogOffButton = styled(CiLogout)`
  cursor: pointer;
  color: #000;
`;

export const Title = styled.h1`
  color: #000;
`;

export const WrapperHeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: auto;
`;
