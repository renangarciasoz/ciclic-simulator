import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const wrap = (props = {}) => shallow(<Button {...props} />).dive();

it('renders with disable props', () => {
  wrap({ disabled: true });
});

it('renders props when passed in', () => {
  const wrapper = wrap({ type: 'submit' });
  expect(wrapper.find({ type: 'submit' })).toHaveLength(1);
});

it('renders button by default', () => {
  const wrapper = wrap();
  expect(wrapper.find('button')).toHaveLength(1);
});

it('renders Link when to is passed in', () => {
  const wrapper = wrap({ to: 'test' }).dive();
  expect(wrapper.find('Link')).toHaveLength(1);
});