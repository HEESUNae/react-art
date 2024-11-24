import styled from 'styled-components';

export const StyledHome = styled.div`
  .banner {
    height: 30vw;
    background-color: #eee;
    background: url('/images/main.jpg') no-repeat 50% 50%;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: end;
    p {
      color: #fff;
    }
  }
  .perfomance-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
    gap: 1.6rem;
    padding: 2rem;
    max-width: 144rem;
    margin: 3rem auto 0;
  }
`;
