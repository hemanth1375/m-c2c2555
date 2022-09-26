import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const TableContainer = styled.div`
  width: 80%;
  overflow: auto;
  border-radius: 5px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  position: relative;
  border-radius: 30px;
  height: 100%;
  & th {
    text-align: center;
    background: #93a4b3;
    font-weight: bold;
    color: white;
    position: sticky;
    height: 3.2rem;
  }
  & th,
  & td {
    padding: 0.3rem;
    font-size: 14px;
  }
  & td {
    height: 3.2rem;
  }
  & tbody tr:nth-child(even) {
    & td {
      background: #edeef6;
    }
  }
  & tbody tr:nth-child(odd) {
    & td {
      background: #ffffff;
    }
  }
`;

export { Container, Table, TableContainer };
