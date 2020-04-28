import styled from 'styled-components';

const FormGroup = styled.div`
  &:first-child {
    margin: 0px;
  }
  margin-top: ${props => props.theme.space[2]};
  width: 100%;
`;

export default FormGroup;
