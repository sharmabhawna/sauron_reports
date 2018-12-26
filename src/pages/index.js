import React from "react"
import SummaryTable from "../components/summaryTable";
import SummaryCards from "../components/summaryCards";
import GlobalStyle from "../components/globalStyle";
import styled from "styled-components";
import Commits from "../commits";

const MainContainer = styled.div`
  width:960px;
  margin: 0 auto;
`
const Layout = props => <MainContainer>{props.children}</MainContainer>

export default ({data}) => {
  let filteredData = data.allDataJson.edges.filter(x=>x.node.pusher.name !== "craftybones");
  const allCommits = new Commits(filteredData);
  const groupedCommits = allCommits.groupedByPerson();

  return (<div>
    <GlobalStyle/>
    <Layout>
      <SummaryTable groups={groupedCommits}/>
      <SummaryCards data={[]}/>
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
                passed{
                  suite,
                  title
                },
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