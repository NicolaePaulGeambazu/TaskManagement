import { HeaderContainer, LogOffButton, Title } from '../../globalstyle';
interface HeaderProps {
  title: string;
}

const clearDataSession = () => {
    localStorage.clear();
    window.location.reload();
}
const Header = ({ title } : HeaderProps) => {
  return (
    <HeaderContainer>
            <Title>{title}</Title>
            <LogOffButton onClick={() => clearDataSession()}/>
    </HeaderContainer>
  );
};

export default Header;
