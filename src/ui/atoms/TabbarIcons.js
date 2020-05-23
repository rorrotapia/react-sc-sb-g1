import React from "react";
import PropTypes from "prop-types";
import MaterialIcon from "material-icons-react";
import styled from "styled-components";
import Colors from "../particles/Colors";

export const colors = {
    purple: "purple",
    white: "white"
};
const Icon = styled.div`
background-color:black;
text-align:center;
`;

const TabbarIcons = props => {
    const { color, icon, size } = props;
    return <Icon><MaterialIcon icon={icon} size={size} color={color}/></Icon>
};

TabbarIcons.propTypes = {
    color: PropTypes.oneOf(Object.keys(colors)),
};

TabbarIcons.defaultProps = {
    color: colors.white
};

export default TabbarIcons;
