import * as React from 'react';
import styled from 'styled-components';

const H1Title = styled('h1')`
  font-size: 1.875rem;
`;

const Title: React.FC<React.HTMLAttributes<HTMLElement>> = props => {
  return <H1Title>{props?.children}</H1Title>;
};

export default Title;
