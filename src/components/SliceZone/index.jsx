import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Content, ListOfPersons, ImageWrapper } from 'components';
import relResolver from 'helpers/relResolver';
import styled from 'styled-components';
import ListOfPosts from '../ListOfPosts';
import ListOfInsights from '../ListOfInsights';
import VideoWrapper from '../VideoWrapper';

const StyledContent = styled(Content)`
  font-family: 'Sul Sans, Light';
  color: #051736;
  margin-right: -10%;
  p {
    font-size: 1.9rem;
    line-height: 2.8rem;
    margin-top: 50px;
  }
  ${props => props.theme.media.md`
    width: 80%;
    margin-right: 0;
    p {
      font-size: 2rem;
      line-height: 2.9rem;
      margin-top: 115px;
    }
  `}
  ${props => props.theme.media.lg`
    width: 919px;
  `}
`;

const Title = styled.h1`
  font-size: 36px;
  line-height: 45px;
  color: #051736;
  margin-top: 120px;
  letter-spacing: normal;
  ${props => props.theme.media.md`
    margin-top: 175px;
  `}
`;

const YouTubeContent = styled(Content)`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default class SliceZone extends Component {
  render() {
    const { allSlices, children } = this.props;
    if (!allSlices) return null;
    const slice = allSlices.map((s, i) => {
      switch (s.slice_type) {
        case 'paragraph':
          return (
            <div>
              {(s.primary.paragraph_image && s.primary.paragraph_image.url) &&
                <ImageWrapper image={s.primary.paragraph_image} info={s.primary.image_info} />}
              {(s.primary.youtube_link && s.primary.youtube_link.html) &&
                <YouTubeContent html={s.primary.youtube_link.html} height={s.primary.youtube_link.height} />}
              {(s.primary.video && s.primary.video.url) &&
                <VideoWrapper src={s.primary.video.url} />}
              {(s.primary.content && s.primary.content.html) &&
              <StyledContent className="invert-color" key={s.id} html={s.primary.content.html} />}
            </div>
          );
        case 'list_of_persons':
          return (
            <ListOfPersons
              key={s.id}
              items={s.items.map(x => ({
                id: x.person.document[0].id,
                ...relResolver(x, 'person'),
              }))}
            />
          );
        case 'list_of_posts':
          return (
            <ListOfPosts
              key={s.id}
              items={s.items.map(x => ({
                id: x.news_post.document[0].id,
                uid: x.news_post.document[0].uid,
                ...relResolver(x, 'news_post'),
              }))}
            />
          );
        case 'list_of_insights':
          return (
            <ListOfInsights
              key={s.id}
              items={s.items.map(x => ({
                id: x.insight.document[0].id,
                uid: x.insight.document[0].uid,
                ...relResolver(x, 'insight'),
              }))}
            />
          );
        case 'video':
          return (
            <VideoWrapper src={s.primary.video.url} />
          );
        default:
          console.warn(`No support for slice type ${s.slice_type}`);
          return null;
      }
    });
    return (
      <>
        {children &&
        <Title className="invert-color">
          {children}
        </Title>}
        {slice}
      </>
    );
  }
}

SliceZone.defaultProps = {
  children: null,
}

SliceZone.propTypes = {
  allSlices: PropTypes.array.isRequired,
  children: PropTypes.node,
}
