import React from "react";
import Moment from "react-moment";
import styled from "styled-components";

const StyledCard = styled.article`
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
`
const SummaryCard = props => {
  if(!props.node.job.results.testResult.failed) {
    console.log(props.node);
  }
  let failed = props.node.job.results.testResult.failed.map((x,i)=><li key={i}>{x.title}</li>)
  return (<StyledCard>
    <p>{props.node.pusher.name} | {props.node.commit.id} | <span><Moment fromNow ago>{props.node.commit.timestamp}</Moment> </span></p>
    <ul>{failed}</ul>
  </StyledCard>)
}

export default SummaryCard;