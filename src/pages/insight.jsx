import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, SEO, SliceZone } from 'components';
import { graphql } from 'gatsby';
import Logo from '../components/Global/Logo';
import Results from '../components/Home/Results';
import { ScrollFadeProvider } from '../hooks/useScrollFade';

const StyledOffCanvasContainer = styled.div`
  height: 100%;
`

function Insights({ data: { prismicInsights } }) {
  const {
    data: { page_title, body, meta_title, meta_description },
  } = prismicInsights;
  return (
    <ScrollFadeProvider>
      <Layout>
        <SEO title={meta_title} desc={meta_description} />

        {page_title && page_title.text &&
          <>
            <Logo dark />
            <SliceZone allSlices={body}>
              {page_title.text}
            </SliceZone>
            <Results />
          </>
        }
      </Layout>
      <StyledOffCanvasContainer key="offcanvas" id="___offcanvas" />
    </ScrollFadeProvider>
  );
}
export default Insights;

Insights.defaultProps = {}

Insights.propTypes = {
  data: PropTypes.shape({
    prismicNews: PropTypes.shape({
      data: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  {
    prismicInsights {
      data {
        meta_title
        meta_description
        page_title {
          text
        }
        body {
          slice_type
          items {
            insight {
              document {
                data {
                  body {
                    ... on PrismicInsightBodyParagraph {
                      primary {
                        content {
                          text
                        }
                        paragraph_image {
                          url
                          dimensions {
                            width
                            height
                          }
                        }
                      }
                      slice_type
                    }
                  }
                  published(formatString: "DD.MM.YY")
                  title {
                    text
                  }
                  type
                }
                id
                uid
              }
              id
            }
          }
        }
      }
    }
  }
`;