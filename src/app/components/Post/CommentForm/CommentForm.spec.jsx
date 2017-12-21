/**
 * @overview Example spec file demonstrating a Jasmine test.
 *
 * @see {@link https://jasmine.github.io/2.8/introduction}
 */

import React from 'react';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import CommentForm from './CommentForm';

describe('CommentForm', () => {
  it('submits comment when click submit', () => {
    const callback = spy();
    const wrapper = mount(<CommentForm onSubmit={callback} />);
    wrapper.find('[type="submit"]').simulate('submit');
    expect(callback.called).toBe(true);
  });
});
