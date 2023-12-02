import { HeaderContainer, LogOffButton } from '../../globalstyle';
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
            <h1>{title}</h1>
            <LogOffButton onClick={() => clearDataSession()}/>
    </HeaderContainer>
  );
};

export default Header;
