import styled from 'styled-components';

export const StyledButton = styled.button`
  border: 0;
  cursor: pointer;
  &.primary {
    margin-top: auto;
    margin-left: auto;
    background: teal;
    a {
      color: #fff;
      font-size: 1.4rem;
      padding: 1.2rem 2rem;
      font-weight: 600;
      display: inline-block;
    }
  }
`;
