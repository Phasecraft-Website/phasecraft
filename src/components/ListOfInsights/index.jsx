import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { gatsbyImgTransformer } from 'helpers/image';
import InsightItem from './InsightItem';
import Filters from '../Filters';

const StyledInsightList = styled.section`
  margin-top: 10px;
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
    margin-bottom: 70px
  `}
`;

const ListOfInsights = ({ items }) => {
  const [filter, setFilter] = useState('All');
  let insights = items;
  if (filter !== 'All') {
    insights = insights.filter(el => el.type.text === filter);
  }
  return (
    <>
      <Filters setFilter={setFilter} filter={filter} />
      <StyledInsightList>
        {insights.map(({ uid, id, title, type, published, body }) => {
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
              type={type.text}
              published={published}
              preview={preview}
              uid={uid}
              previewImage={previewImage}
            />
          )
        })}
        {/* {insights.map(({ uid, id, title, type, published, body }) => {
          const previewText = body[0].primary.content.text;
          const preview = previewText.length > 100 ? `${previewText.substr(0, 100)}...` : previewText;
          return (
            <InsightItem
              key={id}
              title={title.text}
              type={type.text}
              published={published}
              preview={preview}
              uid={uid}
            />
          )
        })}
        {insights.map(({ uid, id, title, type, published, body }) => {
          const previewText = body[0].primary.content.text;
          const preview = previewText.length > 100 ? `${previewText.substr(0, 100)}...` : previewText;
          return (
            <InsightItem
              key={id}
              title={title.text}
              type={type.text}
              published={published}
              preview={preview}
              uid={uid}
            />
          )
        })} */}
      </StyledInsightList>
    </>
  )
};

export default ListOfInsights

ListOfInsights.propTypes = {
  items: PropTypes.array.isRequired,
}
