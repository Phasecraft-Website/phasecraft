import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, SEO, SliceZone } from 'components';
import { graphql } from 'gatsby';
import Logo from '../../components/Global/Logo';
import { Title } from '../../components/Global/Typography';
import Results from '../../components/Home/Results';
import { ScrollFadeProvider } from '../../hooks/useScrollFade';

const StyledOffCanvasContainer = styled.div`
  height: 100%;
`

const PostContainer = styled.div`
  margin-top: 180px;
  width: 67%;
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
      margin-top: 52px;
    }
  }
`;

const NewsPost = ({ data, data: { prismicNewsPost: { data: {
  title, type, published, body,
} } } }) => {
  console.log(data);
  return (
    <ScrollFadeProvider>
      <Layout>
        {/* <SEO title={meta_title} desc={meta_description} images={meta_images} /> */}

        {title && title.text &&
          <>
            <PostContainer>
              <Logo dark />
              <Title>{title.text}</Title>
              <span>
                <h2>{type.text}</h2>
                <h2>{published}</h2>
              </span>
              <SliceZone allSlices={body} />
            </PostContainer>
            <Results />
          </>
        }
      </Layout>
      <StyledOffCanvasContainer key="offcanvas" id="___offcanvas" />
    </ScrollFadeProvider>
  )
}

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
        published: PropTypes.string,
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
