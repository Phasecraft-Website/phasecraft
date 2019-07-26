import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, SEO, SliceZone } from 'components';
import { graphql, Link } from 'gatsby';
import Logo from '../../components/Global/Logo';
import { Title } from '../../components/Global/Typography';
import Results from '../../components/Home/Results';
import { ScrollFadeProvider } from '../../hooks/useScrollFade';

const StyledOffCanvasContainer = styled.div`
  height: 100%;
`;

const PostContainer = styled.div`
  margin-top: 120px;
  width: 120%;
  margin-right: -10%;
  span {
    min-width: 225px;
    width: 35%;
    display: flex;
    justify-content: space-between;
    font-family: 'Sul Sans, Light';
    h2 {
      font-size: 1.2rem;
    }
  }
  div {
    width: 100%;
    p {
      margin-top: 30px;
      margin-right: 20px;
    }
  }

  ${props => props.theme.media.md`
    margin-top: 180px;
    width: 67%;
    margin-right: 0;
    div {
      p {
        margin-top: 52px;
        margin-right: 0;
      }
    }
  `}
`;

const BackButton = styled(props => <Link {...props} />)`
  display: flex;
  align-items: center;
  max-width: fit-content;
  font-family: 'Sul Sans, Light';
  svg {
    margin-left: 8px;
  }
`;

const FurtherReading = styled.div`
  margin-top: 100px;
  h2 {
    font-family: 'Sul Sans, Light';
    margin-bottom: 35px;
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
  p {
    margin: 0!important;
  }
  a {
    font-family: 'Sul Sans, Regular';
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

const NewsPost = ({ data: { prismicNewsPost: { data: {
  title, type, published, body, related,
} } } }) => (
  <ScrollFadeProvider>
    <Layout>
      {/* <SEO title={meta_title} desc={meta_description} images={meta_images} /> */}

      {title && title.text &&
        <>
          <PostContainer>
            <Logo dark />
            <BackButton to="/news">
              Back to News
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10.0135" cy="10.0609" r="9.60388" fill="#2FF2AF"/>
                <path d="M6.68319 9.59872L10.4195 5.86245C10.6748 5.60711 11.0888 5.60711 11.3441 5.86245C11.5995 6.11779 11.5995 6.53179 11.3441 6.78713L8.07021 10.0611L11.3441 13.335C11.5995 13.5903 11.5995 14.0043 11.3441 14.2597C11.0888 14.515 10.6748 14.515 10.4195 14.2597L6.68319 10.5234C6.42785 10.2681 6.42785 9.85406 6.68319 9.59872Z" fill="#051736"/>
              </svg>
            </BackButton>
            <Title>{title.text}</Title>
            <span>
              <h2>{type.text}</h2>
              <h2>{published}</h2>
            </span>
            <SliceZone allSlices={body} />
            {related.length > 0 && 
              <FurtherReading>
                <h2>FURTHER READING</h2>
                {related.map(({ link: { url, target }, text }) => (
                  <p key={url}><a href={url} target={target}>{text}</a></p>
                ))}
              </FurtherReading>
            }
          </PostContainer>
          <Results />
        </>
      }
    </Layout>
    <StyledOffCanvasContainer key="offcanvas" id="___offcanvas" />
  </ScrollFadeProvider>
)

export default NewsPost;

NewsPost.propTypes = {
  data: PropTypes.shape({
    prismicNewsPost: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.shape({
          text: PropTypes.string,
        }),
        type: PropTypes.shape({
          text: PropTypes.string,
        }),
        body: PropTypes.shape(),
        published: PropTypes.string,
        related: PropTypes.array,
      }),
    }),
  }).isRequired
}

export const pageQuery = graphql`
  query NewsPage($uid: String!) {
    prismicNewsPost(uid: { eq: $uid }) {
      id
      uid
      data {
        related: related_articles {
          link {
            url
            target
          }
          text: link_text
        }
        published(formatString: "DD.MM.YY")
        title {
          text
        }
        type {
          text
        }
        body {
          ... on PrismicNewsPostBodyParagraph {
            primary {
              content {
                html
              }
              paragraph_image {
                url
                dimensions {
                  width
                  height
                }
                x2 {
                  url
                  dimensions {
                    width
                    height
                  }
                }
                x3 {
                  url
                  dimensions {
                    width
                    height
                  }
                }
              }
              image_info {
                text
              }
            }
            slice_type
          }
        }
      }
    }
  }
`;
