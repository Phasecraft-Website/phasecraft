import React, { useEffect, useRef } from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { wrapGrid } from 'animate-css-grid';
import { Content } from 'components'
import { Person } from 'lib'
import JoinTeam from './JoinTeam';

const StyledPersonList = styled.section`
  // padding: 0 1.6rem 3.8rem;
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-row-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 70px;
  margin-right: -20%;

  ${props => props.theme.media.md`
    grid-gap: 50px;
    grid-template-columns: repeat(3, 1fr);
    padding-left: 0;
    padding-right: 0;
    margin-top: 70px;
    margin-right: 0;
  `}
`;

function ListOfPersons({ items }) {
  const grid = useRef();
  let forceGridAnimation;
  useEffect(() => {
    ({ forceGridAnimation } = wrapGrid(grid.current));
    console.log(forceGridAnimation);
  });
  return (
    <>
    <StyledPersonList ref={grid}>
      {items.map(({ id, information, name, image, workFunction }, index) => {
        const info = <Content html={information.html} />
        const nameContent = <Content html={name.html} />
        const img =
          image.localFile !== null ? (
            <Img fluid={{ ...image.localFile.childImageSharp.fluid, aspectRatio: 1 }} />
          ) : null
        return (
          <Person
            key={id}
            even={index % 2 === 0}
            name={nameContent}
            information={info}
            workFunction={workFunction}
            image={img}
            animate={() => forceGridAnimation()}
          />
        )
      })}
    </StyledPersonList>
    <JoinTeam />
    </>
  )
}

export default ListOfPersons

ListOfPersons.propTypes = {
  items: PropTypes.array.isRequired,
}
