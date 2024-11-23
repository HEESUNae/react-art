import styled from 'styled-components';

export const StyledNovel = styled.div`
  padding: 2rem;
  .inner {
    display: flex;
    align-items: flex-start;
    gap: 3rem;
    padding: 2rem 0;
  }
  .table-list {
    width: 60%;
    border-collapse: collapse;
    thead {
      padding: 1rem;
    }
    th {
      background-color: #eee;
    }
    th,
    td {
      padding: 0.8rem;
      border: 0.1rem solid #eee;
    }
  }
  .novel-viewer {
    width: 40%;
    padding: 2rem;
    background-color: #eee;
    overflow-y: auto;
    min-height: 50rem;
    max-height: 72.5rem;
  }
`;
