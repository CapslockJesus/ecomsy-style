import React from 'react';
import { Story, Meta} from "@storybook/react/types-6-0";
import Title, {Props} from "./Title";

export default {
    title: 'Beispiel/Title',
    component: Title
} as Meta;

const Template: Story<Props> = (args) => (
    <Title {...args} />
)

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    children: 'Test Titel'
}

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    children: 'Test Titel'
}

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    children: 'Test Titel'
}