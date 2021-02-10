import styled from "styled-components";

const Dashboard = styled.div`
  display: flex;

  flex-direction: column;
  background: ${(props) => (!props.dark === true ? "#0f0e0ee6" : "#fbfbfb")};
`;

Dashboard.TopInterval = styled.div`
  margin: 15px;
`;

Dashboard.Top = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: space-between;

  background: ${(props) => (props.dark === true ? "white" : "transparent")};

  border: 1px solid grey;
  margin: 5px 15px;
`;

Dashboard.Bottom = styled.div``;

export { Dashboard };
