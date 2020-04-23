import * as React from 'react';
import styled from 'styled-components';

const P = styled('p')``;

const Text: React.FC<React.HTMLAttributes<HTMLElement>> = props => {
  return <P>{props?.children}</P>;
};

export default Text;
