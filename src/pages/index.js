import React from "react"
import SummaryTable from "../components/summaryTable";
import SummaryCards from "../components/summaryCards";
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
  let failed = result.failed || []
  return result.total - failed.length;
}

export default ({data}) => {
  const commitsPerPerson = latestCommitPerPerson(data.allDataJson.edges);
  const sortedCommits = ld.sortBy(commitsPerPerson,numberPassed).reverse();

  return (<div>
    <GlobalStyle/>
    <Layout>
      <SummaryTable commits={sortedCommits}/>
      <SummaryCards data={sortedCommits}/>
    </Layout>
  </div>);
}

export const pageQuery = graphql`
  query {
    allDataJson {
      edges {
        node {
          id
          pusher {
            name
            email
          }
          commit {
            id
            timestamp
            url
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