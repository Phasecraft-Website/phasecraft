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

function News({ data: { prismicNews } }) {
  const {
    data: { page_title, body, meta_title },
  } = prismicNews;
  return (
    <ScrollFadeProvider>
      <Layout>
        <SEO title={meta_title} />

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
export default News;

News.defaultProps = {}

News.propTypes = {
  data: PropTypes.shape({
    prismicNews: PropTypes.shape({
      data: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  {
    prismicNews {
      data {
        meta_title
        page_title {
          text
        }
        body {
          slice_type
          items {
            news_post {
              document {
                data {
                  body {
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