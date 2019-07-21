import React, { useEffect, useRef } from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Content } from 'components'
import PostItem from './PostItem';

const StyledPostList = styled.section`
  margin-top: 70px;
  margin-right: -20%;
  display: grid;
  grid-row-gap: 100px;

  ${props => props.theme.media.md`
    padding-left: 0;
    padding-right: 0;
    margin-top: 70px;
    margin-right: 0;
    margin-bottom: 70px
  `}
`;

const ListOfPosts = ({ items }) => (
  <StyledPostList>
    {items.map(({ id, title, type, published, body }) => {
      const previewText = body[0].primary.content.text;
      const preview = previewText.length > 300 ? `${previewText.substr(0, 300)}...` : previewText;
      return (
        <PostItem
          key={id}
          title={title.text}
          type={type.text}
          published={published}
          preview={preview}
        />
      )
    })}
    {items.map(({ id, title, type, published, body }) => {
      const previewText = body[0].primary.content.text;
      const preview = previewText.length > 300 ? `${previewText.substr(0, 300)}...` : previewText;
      return (
        <PostItem
          key={id}
          title={title.text}
          type={type.text}
          published={published}
          preview={preview}
        />
      )
    })}
    {items.map(({ id, title, type, published, body }) => {
      const previewText = body[0].primary.content.text;
      const preview = previewText.length > 300 ? `${previewText.substr(0, 300)}...` : previewText;
      return (
        <PostItem
          key={id}
          title={title.text}
          type={type.text}
          published={published}
          preview={preview}
        />
      )
    })}
  </StyledPostList>
);

export default ListOfPosts

ListOfPosts.propTypes = {
  items: PropTypes.array.isRequired,
}
