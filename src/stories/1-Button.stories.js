import React from 'react';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import TabbarButton, {colors} from "../ui/molecules/TabbarButton";

export default {
  title: 'Molecules / Tabs',
  component: TabbarButton,
  parameters: {
    componentSubtitle: "La démontration de cette page du premier button vaut pour les trois autres suivants.",
  },
  decorators: [withKnobs]

};

export const Demonstration = () => <TabbarButton
    disabled={boolean("Disabled", false)}
    icon={text("Icon", "favorite")}
    text={text("Texte", "Suivis")}
    color={colors.white}/>

export const Simulation = () => <TabbarButton
    disabled={boolean("Disabled", false)}
    icon={text("Icon", "favorite")}
    text={text("Texte", "Suivis")}
    color={colors.purple}/>;

Simulation.story = {
  parameters: {
    docs: {
      storyDescription: `Au click de l’utilsateur sur un “button” de la Tabbar, le contenu “button” change de couleur.`,
    },
  },
};