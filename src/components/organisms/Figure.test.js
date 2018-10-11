import React from 'react';
import { shallow } from 'enzyme';
import Figure from './Figure';

const wrap = (props = {}) => shallow(<Figure {...props}/>);

it('renders with props', () => {
    wrap({ src: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png', alt: 'Test' });
});

it('renders props when passed in', () => {
  const wrapper = wrap({ src: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png', alt: 'Test' });
  expect(wrapper.find({ src: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png', alt: 'Test' })).toHaveLength(1);
});

it('renders aditional props when passed in', () => {
  const wrapper = wrap({ src: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png', alt: 'Test', id: 'test' });
  expect(wrapper.find({ src: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png', alt: 'Test', id: 'test' })).toHaveLength(1);
});