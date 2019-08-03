import React, { useEffect, useRef, useState } from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import useViewport from 'hooks/useViewport';
import { isViewport } from 'helpers';
import { Content } from 'components'
import { Person } from 'lib'
import JoinTeam from './JoinTeam';

const StyledPersonList = styled.section`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-row-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 70px;
  margin-right: -20%;
  transition: 0.6s;

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
  const [people, setPeople] = useState(items);
  const viewport = useViewport();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('animate-css-grid')
        .then(({ wrapGrid }) => {
          // wrapGrid(grid.current, { duration: 600 });
        });
    }
  });

  const toggle = (item, index) => {
    const newList = [...items];
    if (!item.remove) {
      const isMobile = isViewport(viewport, ['DEFAULT', 'MEDIUM'])
      const insert = isMobile ? Math.floor((index+1)/2)*2 : Math.floor((index)/3)*3;
      newList.splice(insert, 0, item)
      setTimeout(() => {
        const el = document.querySelector(`#${item.id}-active`);
        const bodyRect = document.body.getBoundingClientRect();
        const pos = el.getBoundingClientRect();
        const offset = pos.top - bodyRect.top - (isMobile ? 100 : 200);
        window.scroll({
          top: offset, 
          left: 0, 
          behavior: 'smooth'
        });
      }, 1000);
    };
    setPeople(newList);
  }

  return (
    <>
      <StyledPersonList ref={grid}>
        {people.map(({ id, bio, name, contact, image, workFunction, qualification, socialLinks, active }, index) => {
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
              key={`${id}-${active}`}
              id={id}
              name={nameContent}
              bio={bioContent}
              workFunction={workFunction}
              qualification={qualification}
              image={img}
              contact={contactContent}
              socialLinks={socialContent}
              active={active}
              toggle={remove => toggle({
                id, bio, name, contact, image, workFunction, qualification, socialLinks, remove, active: true,
              }, index)}
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
