import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children } : LayoutProps) => {
  return (
    <div>
      <Header title="Tasks management" />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
