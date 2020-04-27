import * as React from 'react';
import styled from 'styled-components';
import { getColorCode } from '../utils';

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  color?: string | 'primary' | 'secondary' | 'link';
}

const A = styled.a`
  color: ${(props: { color?: string }) => getColorCode(props?.color ?? 'link')};
`;

const LinkText: React.FC<TextProps> = props => {
  return <A {...props}>{props?.children}</A>;
};

export default LinkText;
