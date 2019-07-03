
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
  min-height: calc(100vh - 32px);
  justify-content: space-between;
  ${props => props.theme.media.md`
    // padding: 0 40% 50px 0;
    padding-bottom: 32px;
    align-items: ${props.right ? 'flex-end' : 'flex-start'};
  `}
`;

const ContactContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  ${props => props.theme.media.md`
    width: 100%;
    // flex-direction: row;
    // justify-content: space-between;
  `}
`;

const TopContainer = styled.div`
  height: 85vh;
  width: 90%;
  ${props => props.theme.media.md`
    width: 100%;
    height: auto;
  `}
`;

const CopyrightContainer = styled.div`
  width: 180px;
  margin: 70px 0;
`;

const BodyTextContainer = styled.div`
  margin-top: 100px;
  ${props => props.theme.media.md`
    margin-top: 136px;
  `}
`;

const LogoContainer = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
`;

const LogoAbsolute = styled.div`
  position: absolute;
  margin-left: 14px;
  ${props => props.theme.media.md`
    margin-left: 36px;
  `}
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
          <LogoContainer>
            <LogoAbsolute>
              <Logo white />
            </LogoAbsolute>
          </LogoContainer>
          <BodyTextContainer>
            {isViewport(viewport, ['DEFAULT', 'MEDIUM']) && <Title className="fade-out" dark>Contact</Title>}
            <BodyText className="fade-out" html={body[0].primary.content.html} />
          </BodyTextContainer>
        </TopContainer>
        <ContactContainer className="fade-out">
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
          <CopyrightContainer className="fade-out">
            <Copyright />
          </CopyrightContainer>
        )}
      </FlexColumn>
    </>
  );
}

export default Contact;
