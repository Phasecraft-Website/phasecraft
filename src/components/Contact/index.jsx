
import React, { useEffect } from 'react';
import useViewport from 'hooks/useViewport';
import { isViewport } from 'helpers';
import { Content } from 'components';
import styled from 'styled-components';
import Logo from 'components/Global/Logo';

const FlexColumn = styled.div`
  flex: 1;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    padding: 0 36px;
    align-items: ${props => props.right ? 'flex-end' : 'flex-start'};
  };
`;

const BodyText = styled(Content)`
  font-family: 'Sul Sans, Regular';
  font-size: 20px;
  line-height: 25px;
  color: #fff;
  margin-right: 28%;
  transition: 3s ease;
  ${props => props.theme.media.md`
    font-size: 26px;
    line-height: 32px;
    margin-top: 60px;
    margin-right: 35%;
  `}
`;

const Title = styled.h2`
  font-size: 36px;
  line-height: 45px;
  color: #E5E6E4;
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
        <div>
          <Logo white />
          {isViewport(viewport, ['DEFAULT', 'MEDIUM']) && <Title>Contact</Title>}
          <BodyText html={body[0].primary.content.html} />
        </div>
        <div>contact info</div>
      </FlexColumn>
    </>
  );
}

export default Contact;
