
import React, { useEffect } from 'react';
import useViewport from 'hooks/useViewport';
import { isViewport } from 'helpers';
import styled from 'styled-components';
import Logo from 'components/Global/Logo';
import { Title, BodyText } from 'components/Global/Typography';
import ContactInfo from 'components/Global/ContactInfo';
import Copyright from 'components/Global/Copyright';

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 100px);
  justify-content: space-between;
  ${props => props.theme.media.md`
    padding: 0 40% 100px 0;
    padding-bottom: 100px;
    align-items: ${props.right ? 'flex-end' : 'flex-start'};
  `}
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.theme.media.md`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    // margin-right: 35%;
  `}
`;

const TopContainer = styled.div`
  height: 85vh;
  ${props => props.theme.media.md`
    height: auto;
  `}
`;

const CopyrightContainer = styled.div`
  width: 180px;
  margin: 70px 0;
`;

function Contact({ body }) {
  useEffect(() => {
    const backgroundFader = document.getElementById('background-fader');
    backgroundFader.classList.add('invert');
  })
  const viewport = useViewport();
  return (
    <>
      <FlexColumn>
        <TopContainer>
          <Logo white />
          {isViewport(viewport, ['DEFAULT', 'MEDIUM']) && <Title dark>Contact</Title>}
          <BodyText html={body[0].primary.content.html} />
        </TopContainer>
        <ContactContainer>
          <ContactInfo
            location="London"
            email="london@phasecraft.io"
            phone="+44 (0)20 7679 2000"
            links
          />
          <ContactInfo
            location="Bristol"
            email="bristol@phasecraft.io"
            phone="+44 (0)117 928 9000"
            links
          />
        </ContactContainer>
        {isViewport(viewport, ['DEFAULT', 'MEDIUM']) && (
          <CopyrightContainer>
            <Copyright />
          </CopyrightContainer>
        )}
      </FlexColumn>
    </>
  );
}

export default Contact;
