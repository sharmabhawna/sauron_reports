import React from "react";
import styled from "styled-components";
import SummaryCard from "./summaryCard";
import ld from "lodash";

const CardSection = styled.section`
  margin-top: 10px;
`
const hasFailedSection = node => node.node.job.results.testResult.failed

export default (props) => {
  let dataWithFailedSection = props.data.filter(hasFailedSection);
  let ordered = ld.orderBy(dataWithFailedSection,(x)=>x.node.commit.timestamp,"desc");
  let cards = ordered.map((e)=><SummaryCard node={e.node} key={e.node.id}/>)
  return <CardSection>{cards}</CardSection>;
}