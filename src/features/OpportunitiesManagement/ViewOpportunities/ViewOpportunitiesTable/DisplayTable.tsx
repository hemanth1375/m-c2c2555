import React, { useEffect, useState } from "react";
import { Container, Table, TableContainer } from "./tableStyledComponents";
import { PaginationData, User } from "./TableTypes";

function DisplayTable(props: any) {
  const [data, setData] = useState<PaginationData<User>>();
  const { limit, offset, setTotal } = props;
  console.log(data);

  useEffect(() => {
    const getData = async () => {
      const tableData = (await import("./getTableData")).default<User>({
        limit,
        offset,
      });
      setTotal(tableData.pagination.total);
      console.log(tableData.pagination.total);
      setData(tableData);
    };

    // getData is in objet format
    getData();
  }, [limit, offset]);

  return (
    <Container>
      <TableContainer>
        <Table style={{textAlign:"center"}}>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Name</th>
              <th>Account Name</th>
              <th>Sales stage</th>
              <th>Amount</th>
              <th>Close</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((user) => {
              return (
                <tr key={user.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.id}</td>
                  <td>{user.id}</td>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default DisplayTable;
