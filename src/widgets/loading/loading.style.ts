import styled from 'styled-components';

export const StyledLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: block;
    margin: 15px auto;
    position: relative;
    box-sizing: border-box;
    animation: zeroRotation 1s linear infinite alternate;
  }
  .loader::after,
  .loader::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    background: #ff3d00;
    width: 16px;
    height: 16px;
    transform: translate(-50%, 50%);
    border-radius: 50%;
  }
  .loader::before {
    left: auto;
    right: 0;
    transform: translate(50%, 100%);
  }

  @keyframes zeroRotation {
    0% {
      transform: scale(1) rotate(0deg);
    }
    100% {
      transform: scale(0) rotate(360deg);
    }
  }
`;
