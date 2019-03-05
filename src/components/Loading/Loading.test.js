import React from 'react';
import Loading from './Loading';

describe('Loading Component', () => {
  describe('when center is false', () => {
    it('should render children', () => {
      const wrapper = mount(<Loading center={false} />);
      expect(wrapper.html()).toEqual('<div class="loading" />');
      wrapper.unmount();
    });
  });
  describe('when center is true', () => {
    it('should render children', () => {
      const wrapper = mount(<Loading center={true} />);
      expect(wrapper.html()).toEqual('<div class="loading center" />');
      wrapper.unmount();
    });
  });
});
