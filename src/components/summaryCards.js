import React from "react";
import styled from "styled-components";
import SummaryCard from "./summaryCard";

const CardSection = styled.section`
  margin-top: 10px;
`
const hasFailedSection = node => node.node.job.results.testResult.failed

export default (props) => {
  console.log(props.data);
  let dataWithFailedSection = props.data.filter(hasFailedSection);
  let cards = dataWithFailedSection.map((e)=><SummaryCard node={e.node} key={e.node.id}/>)
  return <CardSection>{cards}</CardSection>;
}