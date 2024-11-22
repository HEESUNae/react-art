import styled from 'styled-components';

export const StyledPfmCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  gap: 1.6rem;
  padding: 2rem;
  max-width: 144rem;
  margin: 5rem auto;
  .pfm-card {
    border: 1px solid #ddd;
    gap: 1.6rem;
    display: flex;
    &:hover {
      border-color: teal;
      img {
        transform: scale(1.3);
      }
    }
    .img-wrap {
      max-width: 15rem;
      min-width: 15rem;
      background-color: #eee;
      overflow: hidden;
      height: auto;
      img {
        object-fit: cover;
        transition: 0.3s;
        min-height: 20rem;
      }
    }
    .pfm-info {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      margin-top: 1.6rem;
      .title-wrap {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      p {
        font-size: 1.4rem;
        margin-right: 1.6rem;
      }
      .preiod {
        color: #888;
        margin-right: 0;
      }
      .title {
        font-weight: 600;
        font-size: 1.8rem;
        margin: 1.6rem 0 1rem;
      }
    }
  }
`;
