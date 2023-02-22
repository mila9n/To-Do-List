import styled from "styled-components";

export const HeaderStyle = styled.header`
  & > img {
    width: 100%;
  }

  & > div {
    position: absolute;
    top: 4%;
    left: 50%;
    transform: translateX(-50%);
  }

  & > div > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > div h1 {
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 5px;
  }

  #light h1 {
    color: #fff;
  }

  #dark h1 {
    font-weight: 800;
    color: #fff;
  }

  & > div > img {
    width: 25px;
  }
`;
