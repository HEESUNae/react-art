import styled from 'styled-components';

export const StyledNovel = styled.div`
  padding: 2rem;
  .tab-container {
    display: inline-flex;
    gap: 1rem;
    button {
      min-width: 6rem;
      padding: 0.8rem;
      background-color: #eee;
    }
  }
  .content-container {
    display: flex;
    align-items: flex-start;
    gap: 3rem;
    padding: 2rem 0;
  }
  .table-list {
    width: 60%;
    border-collapse: collapse;
    word-break: keep-all;
    thead {
      padding: 1rem;
    }
    tr {
      &.active {
        background: #f4ffff;
        font-weight: 600;
      }
    }
    th {
      background-color: #f3f3f3;
    }
    th,
    td {
      padding: 0.8rem;
      border: 0.1rem solid #eee;
      p {
        cursor: pointer;
      }
    }
  }
  .novel-viewer {
    width: 40%;
    padding: 2rem;
    overflow-y: auto;
    min-height: 50rem;
    max-height: 57rem;
    border: 0.1rem solid;
  }

  @media (max-width: 900px) {
    .content-container {
      flex-direction: column;
      .novel-viewer {
        width: 100%;
        box-sizing: border-box;
      }
      .table-list {
        width: 100%;
      }
    }
  }
`;
