import React from "react";

const EyeBallTable = ({ results }) => {
  const rows = results.map(({ key, id, cost }) => {
    return (
      <tr key={key}>
        <th scope="row" className="text-center">
          <span className="text-success">{id}</span>
        </th>
        <td className="text-right">
          <span className="text-success">{cost}</span>
        </td>
      </tr>
    );
  });
  return (
    <table className="table table-sm">
      <thead className="thead-dark">
        <tr>
          <th scope="col" className="text-center">
            Id
          </th>
          <th scope="col" className="text-right">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default EyeBallTable;
