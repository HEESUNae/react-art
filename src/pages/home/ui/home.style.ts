import styled from 'styled-components';

export const StyledHome = styled.div`
  .banner {
    height: 40rem;
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
  .all-perfomance-container {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
    gap: 1.6rem;
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
        height: 180px;
        overflow: hidden;
        img {
          object-fit: cover;
          transition: 0.3s;
        }
      }
      .pfm-info {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        margin-top: 1.6rem;
        .badge {
          background: #444444;
          color: #fff;
          border-radius: 1.8rem;
          padding: 0.4rem 0.8rem;
          font-size: 1.2rem;
          display: inline-flex;
          margin-right: 0;
        }
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
        .btn-more {
          margin-top: auto;
          margin-left: auto;
          background: teal;
          color: #fff;
          font-weight: 600;
          font-size: 1.4rem;
          padding: 1.2rem 2rem;
          display: inline-block;
        }
      }
    }
  }
`;
