import * as React from 'react';
import styled from 'styled-components';

import { getColorCode } from '../utils';

interface TitleProps extends React.HTMLAttributes<HTMLElement> {
  color?: string | 'primary' | 'secondary';
}

const H1Title = styled.h1`
  font-size: 1.875rem;
  color: ${(props: { color?: string }) => getColorCode(props?.color ?? 'primary')};
`;

const Title: React.FC<TitleProps> = props => {
  return <H1Title>{props?.children}</H1Title>;
};

export default Title;
