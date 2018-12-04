import React from "react"
import { graphql } from "gatsby";
import ld from "lodash";


const latestCommit = commits => ld.maxBy(commits,(c)=>c.node.commit.timestamp);
const latestCommitPerPerson = (data) => ld.map(ld.groupBy(data,(d)=>d.node.pusher.name),latestCommit);

const toRow = ({node},index) => {
  let results = node.job.results.testResult;
  return <tr>
    <td>{index+1}</td>
    <td>{node.pusher.name}</td>
    <td>{node.commit.id.substr(0,8)}</td>
    <td>{results.total}</td>
    <td>{results.failed.length}</td>
    <td>{node.commit.timestamp}</td>
  </tr>
}

export default ({data}) => {
  const commitsPerPerson = latestCommitPerPerson(data.allDataJson.edges);
  const sortedCommits = ld.sortBy(commitsPerPerson,(c)=>c.node.pusher.name);
  let rows = sortedCommits.map(toRow);
  return (<div>
  <table>
    <tbody>{rows}</tbody>
  </table>
  </div>)
}

export const pageQuery = graphql`
  query {
    allDataJson {
      edges {
        node {
          pusher {
            name
            email
          }
          commit {
            id
            timestamp
          }
          project {
            name
          }
          job {
            results {
              testResult {
                total,
                failed {
                  suite,
                  title
                }
              }
            }
          }
        }
      }
    }
  }`