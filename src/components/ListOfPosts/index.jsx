import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { gatsbyImgTransformer } from 'helpers/image';
import { ScrollFade } from '../../hooks/useScrollFade';
import PostItem from './PostItem';
import Filters from '../Filters';

const StyledPostList = styled.section`
  margin-top: 50px;
  margin-right: -20%;
  display: grid;
  grid-row-gap: 70px;

  ${props => props.theme.media.md`
    grid-row-gap: 120px;
    padding-left: 0;
    padding-right: 0;
    margin-top: 70px;
    margin-right: 0;
    margin-bottom: 70px
  `}
`;

const ShowMore = styled.button`
  border: none;
  padding: 20px;
  font-size: 1.4rem;
  line-height: 1.7rem;
  font-family: 'GT Pressura Mono Light';
  letter-spacing: 0.3rem;
  background: rgba(255,255,255,0.4);
  cursor: pointer;
  transition: 0.6s;
  width: 100%
  ${props => props.theme.media.md`
    margin-right: 0;
    width: 70%;
  `}
  &:hover {
    background: rgba(255,255,255,0.8);
  }
`;

const ListOfPosts = ({ items }) => {
  const [filter, setFilter] = useState('All');
  const [showAmount, setShowAmount] = useState(4);
  const { dispatch } = React.useContext(ScrollFade);
  const increment = 4;

  const showMore = () => {
    setShowAmount(showAmount + increment);
    setTimeout(() => {
      dispatch({ type: 'update' });
    }, 800);
  }

  let posts = items;
  if (filter !== 'All') {
    posts = posts.filter(el => el.type === filter);
  }
  const postsToDisplay = posts.slice(0, showAmount);
  return (
    <>
      <Filters setFilter={setFilter} filter={filter} />
      <StyledPostList>
        {postsToDisplay.map(({ uid, id, title, type, published, body }) => {
          let previewText = '';
          let previewImage = null;
          for (let el of body) {
            if (previewText === '' && el.slice_type === 'paragraph') {
              if (previewText === '') previewText = el.primary.content.text;
              if (!previewImage && el.primary.paragraph_image && el.primary.paragraph_image.url) previewImage = gatsbyImgTransformer(el.primary.paragraph_image);
            }
            if (previewText !== '' && previewImage) {
              break;
            }
          }
          const preview = previewText.length > 200 ? `${previewText.substr(0, 200)}...` : previewText;
          return (
            <PostItem
              key={id}
              title={title.text}
              type={type}
              published={published}
              preview={preview}
              previewImage={previewImage}
              uid={uid}
            />
          )
        })}
        {posts.length > postsToDisplay.length &&
        <ShowMore type="button" onClick={showMore}>SHOW MORE</ShowMore>}
      </StyledPostList>
    </>
  )
};

export default ListOfPosts

ListOfPosts.propTypes = {
  items: PropTypes.array.isRequired,
}
