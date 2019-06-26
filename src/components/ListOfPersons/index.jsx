import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Content } from 'components'
import { Person } from 'lib'

const StyledPersonList = styled.section`
  padding: 0 1.6rem 3.8rem;
  position: relative;

  ${props => props.theme.media.sm`
     padding-left: 0;
     padding-right: 0;
  `}
`

function ListOfPersons({ items }) {
  return (
    <StyledPersonList>
      {items.map(({ id, information, name, image, workFunction }, index) => {
        const info = <Content html={information.html} />
        const nameContent = <Content html={name.html} />
        const img =
          image.localFile !== null ? (
            <Img fixed={image.localFile.childImageSharp.fixed} />
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
