import { HeaderContainer } from '../../globalstyle';

interface HeaderProps {
  title: string;
}

const Header = ({ title } : HeaderProps) => {
  return (
    <HeaderContainer>
      <h1>{title}</h1>
    </HeaderContainer>
  );
};

export default Header;
