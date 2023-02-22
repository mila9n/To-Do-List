import styled from "styled-components";

export const TaskStyle = styled.div`
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid lightgray;
    padding: 15px 15px;
  }

  #dark {
    background-color: #25273c;
    border-bottom: 1px solid rgba(250, 250, 250, 0.3);
  }

  #light {
    background-color: #fff;
  }

  & > div > span {
    width: 18px;
    height: 18px;
    margin-right: 5px;
    border: 1px solid gray;
    border-radius: 100px;
  }

  .completed {
    background-image: linear-gradient(#7ab1f8, #ab79f8);
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    img {
      width: 10px;
    }
  }

  p {
    width: 80%;
    font-size: 0.8rem;
  }

  #dark p {
    color: #fff;
  }

  .completed-task {
    opacity: 0.4;
    text-decoration: line-through;
  }

  img {
    width: 12px;
    fill: #fff;
  }
`;
