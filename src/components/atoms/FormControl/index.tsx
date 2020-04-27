import styled from 'styled-components';
import css from '@styled-system/css';

export const FormGroup = styled.div`
  &:first-child {
    margin: 0px;
  }
  ${css({
    marginTop: [2],
  })}
  width: 100%;
`;
