import React from "react";
import styled from "styled-components";
import Moment from "react-moment";
import {Link} from "gatsby";

const linkToInternPage = intern => `/interns/${intern}`;

const numberPassed = ({node}) => {
  let result=node.job.results.testResult;
  let failed = result.failed || []
  return result.total - failed.length;
}

const toRow = ({node},index) => {
  let results = node.job.results.testResult;
  let intern = node.pusher.name;
  return <tr key={node.id}>
    <td>{index+1}</td>
    <td><Link to={linkToInternPage(intern)}>{node.pusher.name}</Link></td>
    <td><a href={node.commit.url}>{node.commit.id.substr(0,8)}</a></td>
    <td>{numberPassed({node})} / {results.total}</td>
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