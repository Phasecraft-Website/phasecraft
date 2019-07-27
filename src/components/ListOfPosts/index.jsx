import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PostItem from './PostItem';
import Filters from '../Filters';

const StyledPostList = styled.section`
  margin-top: 50px;
  margin-right: -20%;
  display: grid;
  grid-row-gap: 70px;

  ${props => props.theme.media.md`
    grid-row-gap: 100px;
    padding-left: 0;
    padding-right: 0;
    margin-top: 70px;
    margin-right: 0;
    margin-bottom: 70px
  `}
`;

const ListOfPosts = ({ items }) => {
  const [filter, setFilter] = useState('All');
  let posts = items;
  if (filter !== 'All') {
    posts = posts.filter(el => el.type.text === filter);
  }
  return (
    <>
      <Filters setFilter={setFilter} filter={filter} />
      <StyledPostList>
        {posts.map(({ uid, id, title, type, published, body }) => {
          const previewText = body[0].primary.content.text;
          const preview = previewText.length > 300 ? `${previewText.substr(0, 300)}...` : previewText;
          return (
            <PostItem
              key={id}
              title={title.text}
              type={type.text}
              published={published}
              preview={preview}
              uid={uid}
            />
          )
        })}
        {posts.map(({ uid, id, title, type, published, body }) => {
          const previewText = body[0].primary.content.text;
          const preview = previewText.length > 300 ? `${previewText.substr(0, 300)}...` : previewText;
          return (
            <PostItem
              key={id}
              title={title.text}
              type={type.text}
              published={published}
              preview={preview}
              uid={uid}
            />
          )
        })}
        {posts.map(({ uid, id, title, type, published, body }) => {
          const previewText = body[0].primary.content.text;
          const preview = previewText.length > 300 ? `${previewText.substr(0, 300)}...` : previewText;
          return (
            <PostItem
              key={id}
              title={title.text}
              type={type.text}
              published={published}
              preview={preview}
              uid={uid}
            />
          )
        })}
      </StyledPostList>
    </>
  )
};

export default ListOfPosts

ListOfPosts.propTypes = {
  items: PropTypes.array.isRequired,
}
