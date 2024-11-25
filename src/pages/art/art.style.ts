import styled from 'styled-components';

export const StyledArt = styled.div`
  .inner {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 1rem;
    .movie {
      position: relative;
      /* border-radius: 0.4rem; */
      overflow: hidden;
    }
    .youtube {
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 3em;
      }
    }
  }
`;
