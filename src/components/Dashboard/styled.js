import styled from "styled-components";

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
`;

Dashboard.Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 700px;
  border: 1px solid grey;
  margin: 15px;
`;

Dashboard.Bottom = styled.div``;

export { Dashboard };
