import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Content, ListOfPersons } from 'components';
import relResolver from 'helpers/relResolver';
import styled from 'styled-components';

const StyledContent = styled(Content)`

  ${props => props.theme.media.md`
    width: 766px;
  `}
`

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
        {children}
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
