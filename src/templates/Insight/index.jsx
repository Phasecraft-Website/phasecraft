import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from 'components';
import { graphql} from 'gatsby';
import Post from 'components/Post';
import { ScrollFadeProvider } from '../../hooks/useScrollFade';

const StyledOffCanvasContainer = styled.div`
  height: 100%;
`;

const Insight = ({ data: { prismicInsight: { data: {
  title, type, published, body, related,
} } } }) => (
  <ScrollFadeProvider>
    <Layout>
      {/* <SEO title={meta_title} desc={meta_description} images={meta_images} /> */}

      {(title && title.text) &&
        <Post
          title={title.text}
          type={type.text}
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

export default Insight;

Insight.propTypes = {
  data: PropTypes.shape({
    prismicInsight: PropTypes.shape({
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
  query InsightsPage($uid: String!) {
    prismicInsight(uid: { eq: $uid }) {
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
          ... on PrismicInsightBodyParagraph {
            primary {
              content {
                html
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