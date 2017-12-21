/**
 * @overview Example spec file demonstrating a Jasmine test.
 *
 * @see {@link https://jasmine.github.io/2.8/introduction}
 */

import React from 'react';
import { shallow } from 'enzyme';
import Comment from './Comment';

function mockItem() {
  return {
    "parent_id": null,
    "user": "Tanner Day",
    "content": "Nihil qui minus eum aut praesentium",
    "date": "2017-12-13",
    "postId": "2",
    "id": 14
  }
}

describe('Comment', function() {
  let comment, wrapper;

  beforeEach(() => {
    comment = mockItem();
    wrapper = shallow(<Comment comment={comment} />);
  });

  it('renders whithout trouble', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('renders the content', () => {
    expect(wrapper.find('.comment-content').text()).toEqual(comment.content);
  });
});
