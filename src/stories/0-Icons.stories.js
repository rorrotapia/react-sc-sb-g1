import React from 'react';
import { linkTo } from '@storybook/addon-links';
import {boolean, text} from "@storybook/addon-knobs";
import TabbarIcons from "../ui/atoms/TabbarIcons";

export default {
  title: 'Atoms / Icons',
  component: TabbarIcons,
  parameters: {
    componentSubtitle: "La démontration de cette page du premier button vaut pour les trois autres suivants.",
    backgrounds: [
      { name: 'default', value: '#000000', default: true }
    ]
  },
};


const colors = {
  purple: "purple",
  white: "white"
};

export const Suivis = () => <TabbarIcons icon="favorite" color={colors.white} />
export const Decouverte = () => <TabbarIcons icon="explore" color={colors.white}/>
export const Parcourir = () => <TabbarIcons icon="filter_none" color={colors.white}/>
export const Esports = () => <TabbarIcons icon="emoji_events" color={colors.white}/>


Decouverte.story = {
  parameters: {
    docs: {
      storyDescription: `Icon de la page Decouverte`,
    },
    backgrounds: [
      { name: 'default', value: '#000000', default: true }
    ]
  },
};

Parcourir.story = {
  parameters: {
    docs: {
      storyDescription: `Icon de la page Parcourir`,
    },
    backgrounds: [
      { name: 'default', value: '#000000', default: true }
    ]
  },
};


Esports.story = {
  parameters: {
    docs: {
      storyDescription: `Icon de la page Esport`,
    },
    backgrounds: [
      { name: 'default', value: '#000000', default: true }
    ]
  },
};