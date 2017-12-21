/**
 * @overview Example spec file demonstrating a Jasmine test.
 *
 * @see {@link https://jasmine.github.io/2.8/introduction}
 */

import React from 'react';
import { shallow } from 'enzyme';
import BlogPost from './BlogPost';

function mockItem() {
  return {
    "id": 1,
    "title": "Short Story: The Truth About Wildlife",
    "author": "Melissa Manges",
    "publish_date": "2017-02-23",
    "slug": "blog-post-1",
    "description": "Utroque denique invenire et has.",
    "content": "<p>Utroque denique invenire et has. Cum case definitiones no, est dicit placerat verterem ne.</p> <p>In ius nonumy perfecto adipiscing, ad est cibo iisque aliquid, dicit civibus eum ei. Cum animal suscipit at, utamur utroque appareat sed ex.</p>",
    "image_url": "https://images.unsplash.com/photo-1490718687940-0ecadf414600?auto=format&fit=crop&w=1250&q=80"
  }
}

describe('BlogPost', () => {
  let post, wrapper;

  beforeEach(() => {
    post = mockItem();
    wrapper = shallow(<BlogPost post={post} />);
  });

  it('renders whithout trouble', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('renders the title', () => {
    expect(wrapper.find('.post-title').text()).toEqual(post.title);
  });

  it('renders the description', () => {
    expect(wrapper.find('.post-description').text()).toEqual(post.description);
  });

  it('links to post page', () => {
    expect(wrapper.find('Link').at(0).prop('to')).toContain(post.slug);
  });
});
