import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { gatsbyImgTransformer } from 'helpers/image';
import { ScrollFade } from '../../hooks/useScrollFade';
import InsightItem from './InsightItem';
import Filters from '../Filters';

const StyledInsightList = styled.section`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: -20%;
  display: grid;
  grid-row-gap: 10px;

  ${props => props.theme.media.md`
    grid-template-columns: repeat(2, 1fr);
    width: 70%;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    padding-left: 0;
    padding-right: 0;
    margin-top: 16px;
    margin-right: 0;
    margin-bottom: 16px;
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
  width: 120%;
  margin-right: -20%;
  ${props => props.theme.media.md`
    margin-right: 0;
    width: 70%;
  `}
  &:hover {
    background: rgba(255,255,255,0.8);
  }
`;

const ListOfInsights = ({ items }) => {
  const [filter, setFilter] = useState('All');
  const [showAmount, setShowAmount] = useState(6);
  const { dispatch } = React.useContext(ScrollFade);
  const increment = 4;

  const showMore = () => {
    setShowAmount(showAmount + increment);
    setTimeout(() => {
      dispatch({ type: 'update' });
    }, 800);
  }
  let insights = items;
  if (filter !== 'All') {
    insights = insights.filter(el => el.type === filter);
  }
  const insightsToDisplay = insights.slice(0, showAmount);
  return (
    <>
      <Filters setFilter={setFilter} filter={filter} />
      <StyledInsightList>
        {insightsToDisplay.map(({ uid, id, title, type, published, body }) => {
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
          const preview = previewText.length > 100 ? `${previewText.substr(0, 100)}...` : previewText;
          return (
            <InsightItem
              key={id}
              title={title.text}
              type={type}
              published={published}
              preview={preview}
              uid={uid}
              previewImage={previewImage}
            />
          )
        })}
      </StyledInsightList>
      {insights.length > insightsToDisplay.length &&
      <ShowMore type="button" onClick={showMore}>SHOW MORE</ShowMore>}
    </>
  )
};

export default ListOfInsights

ListOfInsights.propTypes = {
  items: PropTypes.array.isRequired,
}
