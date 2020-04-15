import * as React from 'react';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC = (props: LayoutProps) => (
  <div id="layout">
    <main>{props.children}</main>
  </div>
);
