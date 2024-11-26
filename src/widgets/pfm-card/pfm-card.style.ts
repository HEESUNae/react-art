import styled from 'styled-components';

export const StyledPfmCard = styled.div`
  display: flex;
  .pfm-card {
    border: 1px solid #ddd;
    display: flex;
    flex-grow: 1;
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
      padding: 1.6rem;
      gap: 1rem;
      p {
        font-size: 1.4rem;
        margin-right: 1.6rem;
      }
      .preiod {
        color: #888;
      }
      .title {
        font-weight: 600;
        font-size: 1.8rem;
      }
    }
  }

  @media (max-width: 600px) {
    .pfm-info button {
      width: 100%;
    }
  }
`;
