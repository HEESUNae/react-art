import styled from 'styled-components';

export const StyledSubBanner = styled.div<{ bgUrl: string }>`
  background: url(${(props) => props.bgUrl}) no-repeat 50% 50%;
  background-size: cover;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 2.2rem;
  color: #fff;
  border-radius: 0.8rem;
  margin-bottom: 5rem;
  padding: 0 3rem;
  text-align: center;
`;
