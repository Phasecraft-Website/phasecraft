import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Content, ListOfPersons } from 'components';
import relResolver from 'helpers/relResolver';
import styled from 'styled-components';

const StyledContent = styled(Content)`
  ${props => props.theme.media.md`
    color: #E5E6E4;
    width: 70%;
    p {
      font-size: 2rem;
      line-height: 2.2rem;
      margin-top: 115px
    }
  `}
`;

const Title = styled.h2`
  font-size: 36px;
  line-height: 45px;
  color: ${({ dark }) => dark ? `#051736` : `#E5E6E4`};
  ${props => props.theme.media.md`
    margin-top: 175px;
  `}
`;

export default class SliceZone extends Component {
  render() {
    const { allSlices, children } = this.props;
    if (!allSlices) return null;
    const slice = allSlices.map((s, i) => {
      switch (s.slice_type) {
        case 'paragraph':
          return <StyledContent key={s.id} html={s.primary.content.html} />
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
        default:
          console.warn(`No support for slice type ${s.slice_type}`);
          return null;
      }
    });
    return (
      <>
        <Title>
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
