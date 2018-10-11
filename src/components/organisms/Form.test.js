import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

const wrap = (props = {}) => shallow(<Form {...props}/>);

it('render without passing the props', () => {
    wrap({ data: {money: 0, name: '', time: 0}});
});

it('renders with props emtpy', () => {
    wrap({ data: {}});
});

it('renders with props', () => {
    wrap({ data: {money: 0, name: '', time: 0}});
});