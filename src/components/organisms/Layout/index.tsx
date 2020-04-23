import * as React from 'react';
import Header from '../Header';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC = (props: LayoutProps) => (
  <div id="layout">
    <Header text="title" />
    {props.children}
  </div>
);

export default Layout;
