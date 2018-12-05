import React from "react";
import styled from "styled-components";
import Moment from "react-moment";

const toRow = ({node},index) => {
  let results = node.job.results.testResult;
  return <tr>
    <td>{index+1}</td>
    <td>{node.pusher.name}</td>
    <td>{node.commit.id.substr(0,8)}</td>
    <td>{results.total - results.failed.length} / {results.total}</td>
    <td><Moment fromNow ago>{node.commit.timestamp}</Moment></td>
  </tr>
}

const StyledTable = styled.table`
  font-size: 15px;
  margin: 0 auto;
  border-collapse: collapse;
  border-spacing: 0;
  thead {
    background-color: #2196F3;
    color: white;
  }
  td, th {
    border: 1px solid #ddd;
    padding: 5px;
  }
`

const SummaryTable = props => (<StyledTable>
  <thead>
    <tr>
      <th>No</th>
      <th>Username</th>
      <th>SHA</th>
      <th>Pass %</th>
      <th>Time</th>
    </tr>
  </thead>
  <tbody>
    {props.commits.map(toRow)}
  </tbody>
</StyledTable>)

export default SummaryTable;