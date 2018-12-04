import ld from "lodash";

const latestCommit = commits => ld.maxBy(commits,(c)=>c.node.commit.timestamp);
export const latestCommitPerPerson = (data) => ld.map(ld.groupBy(data,(d)=>d.node.pusher.name),latestCommit);

