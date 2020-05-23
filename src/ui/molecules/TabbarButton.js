import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";
import MaterialIcon from "material-icons-react";
import {action} from "@storybook/addon-actions";
import TabbarIcons from "../atoms/TabbarIcons";

export const colors = {
    purple: "purple",
    white: "white"
};

const ButtonIcon = styled.button`
  background: black;
  margin-right: 8px;
  padding: 8px 26px;;
  color: ${props => (props.color === colors.purple ? Colors.brand_light : Colors.neutral_white)};
  font-family: sans-serif;
  font-size: 30px;
  display: block;
  border:none;
  min-width:80px
`;
const TextButton = styled.div`
  color:${props => (props.color === colors.purple ? Colors.brand_light : Colors.neutral_white)};
  font-size: 10px;
`;

const TabbarButton = props => {
    const { text, color, icon } = props;
    return <ButtonIcon onClick={action('clicked')}><TabbarIcons icon={icon} color={color}/><TextButton color={color}>{text}</TextButton></ButtonIcon>
};

TabbarButton.propTypes = {
    color: PropTypes.oneOf(Object.keys(colors)),
    text: PropTypes.string
};

TabbarButton.defaultProps = {
    color: colors.white
};

export default TabbarButton;
