import React from "react";
import styled from "styled-components";
import Moment from "react-moment";
import {Link} from "gatsby";
import VegaLite from "./vegaLite";
import ld from "lodash";
import accuracySpec from "../specs/accuracy";
import commitSpec from "../specs/commit";

const linkToInternPage = intern => `/interns/${intern}`;

const numberPassed = ({node}) => {
  let result=node.job.results.testResult;
  let failed = result.failed || []
  return result.total - failed.length;
}


const toRow = (commits,index) => {
  let node = commits[0].node;
  let results = node.job.results.testResult;
  let intern = node.pusher.name;
  let _accuracySpec = accuracySpec();
  let _commitSpec = commitSpec();
  _accuracySpec.data.values = commits.map(x=>x.node).reverse();
  _commitSpec.data.values = commits.map(x=>x.node);
  return <tr key={node.id}>
    <td>{index+1}</td>
    <td><Link to={linkToInternPage(intern)}>{node.pusher.name}</Link></td>
    <td><a href={node.commit.url}>{node.commit.id.substr(0,8)}</a></td>
    <td>{numberPassed({node})} / {results.total}</td>
    <td><Moment fromNow ago>{node.commit.timestamp}</Moment></td>
    <td><VegaLite spec={_accuracySpec}/></td>
    <td><VegaLite spec={_commitSpec}/></td>
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
      <th>Pass % / time</th>
      <th>Push / time</th>
    </tr>
  </thead>
  <tbody>
    {ld.map(props.groups,toRow)}
  </tbody>
</StyledTable>)

export default SummaryTable;