import React from "react";

const SummaryCard = props => {
  let failed = props.node.job.results.testResult.failed.map(x=><li>{x.title}</li>)
  return (<div>
    <p>{props.node.pusher.name}</p>
    <ul>{failed}</ul>
  </div>)
}

export default SummaryCard;