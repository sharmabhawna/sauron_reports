import React from "react";
import Layout from '../layouts/mainLayout.js';
import {graphql} from 'gatsby';
import SummaryCards from '../components/summaryCards';
import GlobalStyle from '../components/globalStyle';

export default (props) => {
  return (<div>
    <GlobalStyle/>
    <Layout><SummaryCards data={props.data.allDataJson.edges}/></Layout>
    </div>)
}

export const query = graphql`
query($intern: String!) {
  allDataJson(filter: {pusher: {name: {eq: $intern}}}) {
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
        }
        project {
          name
        }
        job {
          status
          results {
            log
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
