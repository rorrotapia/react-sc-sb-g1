import React from 'react';
import { action } from '@storybook/addon-actions';
import Tabbar, { colors } from '../ui/organisme/Tabbar';
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
    title: 'Organisme / Tabbar',
    component: Tabbar,
    parameters: {
        componentSubtitle: "La Tabbar est utlisé sur le site pour permettre au viewers de ce naviguer d’un onglet a un autre en connaissant sa position dans l’application. La page suivis est selectionner dès l’ouverture du site.",
    },
    decorators: [withKnobs]
};

export const White = () => <Tabbar color={colors.white}/>;

export const Purple = () => <Tabbar  color={colors.purple}/>;
