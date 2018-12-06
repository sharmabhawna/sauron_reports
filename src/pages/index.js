import React from "react"
import { graphql } from "gatsby";
import SummaryTable from "../components/summaryTable";
import SummaryCard from "../components/summaryCard";
import GlobalStyle from "../components/globalStyle";
import {latestCommitPerPerson} from "../utils.js";
import styled from "styled-components";
import ld from "lodash"

const MainContainer = styled.div`
  width:960px;
  margin: 0 auto;
`

const Layout = props => <MainContainer>{props.children}</MainContainer>

const numberPassed = ({node}) => {
  let result=node.job.results.testResult;
  return result.total - result.failed.length;
}

export default ({data}) => {
  const commitsPerPerson = latestCommitPerPerson(data.allDataJson.edges);
  const sortedCommits = ld.sortBy(commitsPerPerson,numberPassed).reverse();
  const summaryCards = sortedCommits.map(x=><SummaryCard node={x.node}/>);

  return (<div>
    <GlobalStyle/>
    <Layout>
      <SummaryTable commits={sortedCommits}/>
      <div>{summaryCards}</div>
    </Layout>
  </div>);
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