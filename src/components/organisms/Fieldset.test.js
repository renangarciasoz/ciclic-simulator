import React from 'react';
import { shallow } from 'enzyme';
import Fieldset from './Fieldset';

const wrap = (props = {}) => shallow(<Fieldset {...props}/>);

it('renders with props', () => {
    wrap({ label: 'Teste'});
});

it('renders props when passed in', () => {
  const wrapper = wrap({ text: 'Olá'});
  expect(wrapper.find({ text: 'Olá'})).toHaveLength(1);
});

it('renders money fieldset', () => {
  const wrapper = wrap({ text: 'Olá', money: true});
  expect(wrapper.find({ text: 'Olá', money: true})).toHaveLength(1);
});

it('renders select fieldset', () => {
  const wrapper = wrap({ text: 'Olá', select: true, options: [{value: 1, text: 'teste'},{value: 2, text: 'teste'}]});
  expect(wrapper.find({ text: 'Olá', select: true, options: [{value: 1, text: 'teste'},{value: 2, text: 'teste'}]})).toHaveLength(1);
});