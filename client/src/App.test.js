import React from 'react';
import { Link } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import LandingPage from './components/LandingPage/LandingPage'

configure({adapter: new Adapter()});

describe('<LandingPage />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<LandingPage />)
  })

  it('Deberia renderizar un <Link />', () => {
    expect(wrapper.find(Link)).toHaveLength(1);
  });

  it('Deberia renderizar un <button>', () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });
  
})