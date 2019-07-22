import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Content, ListOfPersons } from 'components';
import relResolver from 'helpers/relResolver';
import styled from 'styled-components';
import ListOfPosts from '../ListOfPosts';

const StyledContent = styled(Content)`
  font-family: 'Sul Sans, Regular';
  color: #051736;
  margin-right: -10%;
  p {
    font-size: 1.9rem;
    line-height: 2.1rem;
    margin-top: 50px;
  }
  ${props => props.theme.media.md`
    width: 80%;
    margin-right: 0;
    p {
      font-size: 2rem;
      line-height: 2.5rem;
      margin-top: 115px
    }
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

export default class SliceZone extends Component {
  render() {
    const { allSlices, children } = this.props;
    if (!allSlices) return null;
    const slice = allSlices.map((s, i) => {
      // console.log(s.items[0][schema]);
      switch (s.slice_type) {
        case 'paragraph':
          return <StyledContent className="invert-color" key={s.id} html={s.primary.content.html} />
        case 'list_of_persons':
          return (
            <ListOfPersons
              key={s.id}
              items={s.items.map(x => ({
                id: x.person.document[0].id,
                ...relResolver(x, 'person'),
              }))}
            />
          )
        case 'list_of_posts':
          return (
            <ListOfPosts
              key={s.id}
              items={s.items.map(x => ({
                id: x.news_post.document[0].id,
                ...relResolver(x, 'news_post'),
              }))}
            />
          )
        default:
          console.warn(`No support for slice type ${s.slice_type}`);
          return null;
      }
    });
    console.log(children);
    return (
      <>
        <Title className="invert-color">
          {children}
        </Title>
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
