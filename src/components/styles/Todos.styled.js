import styled from "styled-components";

export const TodosStyle = styled.div`
  & > div {
    position: absolute;
    top: 22%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;
