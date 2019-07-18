import React, { useEffect, useRef } from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import styled from 'styled-components'
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
    grid-template-columns: repeat(3, minmax(auto, 273px));
    padding-left: 0;
    padding-right: 0;
    margin-top: 70px;
    margin-right: 0;
    margin-bottom: 70px
  `}
`;

function ListOfPersons({ items }) {
  const grid = useRef();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('animate-css-grid')
        .then(({ wrapGrid }) => {
          wrapGrid(grid.current);
        });
    }
  });
  return (
    <>
    <StyledPersonList ref={grid}>
      {items.map(({ id, bio, name, contact, image, workFunction, qualification, socialLinks }, index) => {
        const bioContent = <Content html={bio.html} />
        const nameContent = <Content html={name.html} />
        const contactContent = <Content html={contact.html} />
        const socialContent = <Content html={socialLinks.html} />
        const img =
          image.localFile !== null ? (
            <Img fluid={{ ...image.localFile.childImageSharp.fluid, aspectRatio: 1 }} />
          ) : null
        return (
          <Person
            key={id}
            even={index % 2 === 0}
            name={nameContent}
            bio={bioContent}
            workFunction={workFunction}
            qualification={qualification}
            image={img}
            contact={contactContent}
            socialLinks={socialContent}
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
