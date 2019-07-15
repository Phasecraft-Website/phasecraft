
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
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
    padding-bottom: 32px;
    align-items: ${props.right ? 'flex-end' : 'flex-start'};
  `}
`;

const ContactContainer = styled.div`
  ${props => props.theme.media.md`
    width: 100%;
  `}
`;

const TopContainer = styled.div`
  height: 85vh;
  width: 100%;
  ${props => props.theme.media.md`
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
    width: 63%;
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

function ContactComponent({ body, data: { allPrismicLocation: { nodes }} }) {
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
          {nodes.map(({ data: { content }}) => (
            <ContactInfo
              content={content}
              // directions={directions_text}
              // maps={google_maps_text}
            />
          ))}
        </ContactContainer>
        {isViewport(viewport, ['DEFAULT', 'MEDIUM']) && (
          <CopyrightContainer>
            <Copyright isContact />
          </CopyrightContainer>
        )}
      </FlexColumn>
    </>
  );
}

const Contact = props => (
  <StaticQuery
    query={graphql`
      {
        allPrismicLocation {
          nodes {
            data {
              content {
                html
              }
            }
          }
        }
      }
    `}
    render={data => <ContactComponent data={data} {...props} />}
  />
);

export default Contact;

ContactComponent.defaultProps = {};

ContactComponent.propTypes = {
  body: PropTypes.array.isRequired,
  data: PropTypes.shape({
    allPrismicLocation: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }).isRequired,
};
