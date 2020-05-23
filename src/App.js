import React from "react";
import Tabbar , { colors } from "./ui/organisme/Tabbar";

const AppWrapper = styled.div`
  width: 100vw;
  height: 744px;
  background-color: black;
  padding: 16px;
`

export default function App () {
    return (
        <AppWrapper>
            <Tabbar color={colors.purple}/>
        </AppWrapper>
    )
}