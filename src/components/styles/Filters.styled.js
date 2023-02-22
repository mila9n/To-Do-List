import styled from "styled-components";

export const FiltersStyle = styled.div`
  & > div {
    width: 100%;
    padding: 15px 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;
  }

  #dark {
    background-color: #25273c;
    color: rgba(250, 250, 250, 0.6);
  }

  span {
    cursor: pointer;
  }

  #dark span:hover {
    color: rgba(250, 250, 250, 1);
  }

  #light {
    background-color: #fff;
  }

  .filters {
    position: absolute;
    left: 0;
    right: 0;
    top: 150%;
    padding: 10px;
    box-shadow: 0px 5px 10px lightgray;

    & > div {
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .selected {
    font-size: 0.8rem;
    font-weight: 800;
    background: -webkit-linear-gradient(#7ab1f8, #ab79f8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #dark .filters {
    box-shadow: 0px 5px 10px black;
  }
`;
