import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Content } from 'components'
import { Person } from 'lib'

const StyledPersonList = styled.section`
  padding: 0 1.6rem 3.8rem;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;

  ${props => props.theme.media.sm`
     padding-left: 0;
     padding-right: 0;
     margin-top: 70px;
  `}
`;

function ListOfPersons({ items }) {
  console.log(items[0].image.localFile.childImageSharp);
  return (
    <StyledPersonList>
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
          />
        )
      })}
    </StyledPersonList>
  )
}

export default ListOfPersons

ListOfPersons.propTypes = {
  items: PropTypes.array.isRequired,
}
