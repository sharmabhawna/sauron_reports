import React from "react"
import { graphql } from "gatsby";
import SummaryTable from "../components/summaryTable";
import GlobalStyle from "../components/globalStyle";
import {latestCommitPerPerson} from "../utils.js";
import styled from "styled-components";
import ld from "lodash"

const MainContainer = styled.div`
  width:960px;
  margin: 0 auto;
`

const Layout = props => <MainContainer>{props.children}</MainContainer>

export default ({data}) => {
  const commitsPerPerson = latestCommitPerPerson(data.allDataJson.edges);
  const sortedCommits = ld.sortBy(commitsPerPerson,(c)=>c.node.job.results.testResult.failed.length);
  return (<div><GlobalStyle/><Layout><SummaryTable commits={sortedCommits}/></Layout></div>)
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