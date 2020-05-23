import React from 'react';
import { action } from '@storybook/addon-actions';
import Tabbar, { colors } from '../ui/organisme/Tabbar';
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
    title: 'Organisme / Tabbar',
    component: Tabbar,
    parameters: {
        componentSubtitle: "La Tabbar est utlisé sur le site pour permettre aux viewers de naviguer d’un onglet à un autre en visualisant sa position dans l’application grâce à un changement de couleur. L’icone suivis est visible ( sélectionnée ) dans une autre couleur dès l’ouverture du site.",
    },
    decorators: [withKnobs]
};

export const White = () => <Tabbar color={colors.white}/>;

export const Purple = () => <Tabbar  color={colors.purple}/>;
