import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";
import TabbarButton from "../molecules/TabbarButton";

export const colors = {
    purple: Colors.brand_light,
    grey: "white"
};

const TabbarWrapper = styled.div`
  display:flex;
  justify-content: center;
  background: black;
`;

const Tabbar = props => {
    const { color } = props;
    return (
        <TabbarWrapper>
            <TabbarButton icon={"favorite"} text={"Suivis"} color={color}/>
            <TabbarButton icon={"explore"} text={"Découverte"} color={color}/>
            <TabbarButton icon={"filter_none"} text={"Parcourir"} color={color}/>
            <TabbarButton icon={"emoji_events"} text={"Esports"} color={color}/>
        </TabbarWrapper>
    );
};

Tabbar.propTypes = {
    color: PropTypes.oneOf(Object.keys(colors)),
};

Tabbar.defaultProps = {
    color: colors.grey
};

export default Tabbar;
