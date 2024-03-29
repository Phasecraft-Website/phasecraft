import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, SEO } from 'components';
import { graphql} from 'gatsby';
import Post from 'components/Post';
import { ScrollFadeProvider } from '../../hooks/useScrollFade';

const StyledOffCanvasContainer = styled.div`
  height: 100%;
`;

const NewsPost = ({ data: { prismicNewsPost: { data: {
  title, type, published, body, related, meta_title, meta_description, meta_images
} } } }) => (
  <ScrollFadeProvider>
    <Layout>
      <SEO title={meta_title} desc={meta_description} images={meta_images} />

      {(title && title.text) &&
        <Post
          title={title.text}
          type={type}
          published={published}
          body={body}
          related={related}
          // youtube={youtube}
        />
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
        body: PropTypes.array,
        published: PropTypes.string,
        related: PropTypes.array,
        youtube: PropTypes.shape(),
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
        meta_title
        meta_description
        meta_images {
          image {
            url
            dimensions {
              width
              height
            }
          }
        }
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
        type
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
              }
              image_info {
                text
              }
              youtube_link {
                html
                height
                width
              }
              video {
                ... on PrismicNewsPostBodyParagraphPrimaryVideo {
                  url
                }
              }
            }
            slice_type
          }
        }
      }
    }
  }
`;

// x2 {
//   url
//   dimensions {
//     width
//     height
//   }
// }
// x3 {
//   url
//   dimensions {
//     width
//     height
//   }
// }