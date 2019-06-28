import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, SEO, SliceZone, Contact } from 'components';
import { graphql } from 'gatsby';

const StyledOffCanvasContainer = styled.div`
  height: 100%;
`

function Page({ data: { prismicPage } }) {
  const {
    data: { page_title, meta_title, meta_description, meta_images, body },
  } = prismicPage;
  console.log({ body })
  const isContact = page_title.text === 'Contact';
  return (
    <>
      <Layout isContact={isContact}>
        <SEO title={meta_title} desc={meta_description} images={meta_images} />

        {page_title && page_title.text &&
          <>
            {isContact ?
              <Contact body={body} />
              :
              <SliceZone allSlices={body}>
                {page_title.text}
              </SliceZone>
            }
          </>
        }
        
      </Layout>
      <StyledOffCanvasContainer key="offcanvas" id="___offcanvas" />
    </>
  );
}
export default Page;

Page.defaultProps = {}

Page.propTypes = {
  data: PropTypes.shape({
    prismicPage: PropTypes.shape({
      data: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
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
        page_title {
          text
        }
        body {
          ... on PrismicPageBodyParagraph {
            slice_type
            id
            primary {
              content {
                html
              }
            }
          }
          ... on PrismicPageBodyListOfPersons {
            slice_type
            id
            items {
              person {
                document {
                  id
                  data {
                    name: full_name {
                      html
                    }
                    image {
                      localFile {
                        childImageSharp {
                          fixed(width: 150, height: 150, quality: 100) {
                            ...GatsbyImageSharpFixed
                          }
                        }
                      }
                    }
                    workFunction: function
                    information {
                      html
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;