import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function renderGrid(grid, gutter) {
  const pctWidth = 100 / grid.global.columns;
  const gutterWidth = pctWidth * gutter;

  return `
    grid-template-columns: repeat(
      ${grid.global.columns},
      1fr [col-start]
    );
    grid-column-gap: ${gutterWidth}%;
  `;
}

const StyledGlobalGrid = styled.div`
  display: grid;
  ${props => renderGrid(props.theme.grid, 3 / 4, 1 / 4)}

  ${props => props.theme.media.sm`${renderGrid(props.theme.grid, 12 / 48)}`}
  ${props => props.theme.media.md`${renderGrid(props.theme.grid, 16 / 80)}`}
  ${props => props.theme.media.lg`${renderGrid(props.theme.grid, 16 / 114)}`}
`;

function Grid({ children, ...props }) {
  return <StyledGlobalGrid {...props}>{children}</StyledGlobalGrid>;
}

export default Grid;

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};
