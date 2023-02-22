import styled from "styled-components";

export const InputStyle = styled.div`
  & > div {
    position: absolute;
    top: 14%;
    left: 50%;
    transform: translateX(-50%);
  }

  & > div > input {
    width: 100%;
    border: none;
    outline: none;
    border-radius: 4px;
    font-size: 0.8rem;
    padding: 10px 20px;
  }

  #dark {
    background-color: #25273c;
    color: #fff;
  }
`;
