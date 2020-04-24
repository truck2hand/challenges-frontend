import * as React from 'react';
import styled from 'styled-components';
import { getColorCode } from '../utils';

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  color?: string | 'primary' | 'secondary';
}

const P = styled.p`
  color: ${(props: { color?: string }) => getColorCode(props?.color ?? 'primary')};
`;

const Text: React.FC<TextProps> = props => {
  return <P {...props}>{props?.children}</P>;
};

export default Text;
