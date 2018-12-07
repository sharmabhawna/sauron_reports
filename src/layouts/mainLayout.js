import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width:960px;
  margin: 0 auto;
`

export default (props) => <MainContainer>{props.children}</MainContainer>
