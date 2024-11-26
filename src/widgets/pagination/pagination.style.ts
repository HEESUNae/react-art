import styled from 'styled-components';

export const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 5rem;
  button {
    background-color: #fff;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    img {
      width: 1.8rem;
      &.prev-arrow {
        transform: rotate(-180deg);
      }
    }
  }
  .active {
    background-color: #000;
    color: #fff;
  }
`;
