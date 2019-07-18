import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, SEO, SliceZone, Contact } from 'components';
import { graphql } from 'gatsby';
import Logo from '../components/Global/Logo';
import Results from '../components/Home/Results';
import { ScrollFadeProvider } from '../hooks/useScrollFade';

const StyledOffCanvasContainer = styled.div`
  height: 100%;
`

function Page({ data: { prismicPage } }) {
  const {
    data: { page_title, meta_title, meta_description, meta_images, body },
  } = prismicPage;
  const isContact = page_title.text === 'Contact';
  return (
    <ScrollFadeProvider>
      <Layout isContact={isContact}>
        <SEO title={meta_title} desc={meta_description} images={meta_images} />

        {page_title && page_title.text &&
          <>
            {isContact ?
              <Contact body={body} />
              :
              <>
                <Logo dark />
                <SliceZone allSlices={body}>
                  {page_title.text}
                </SliceZone>
                <Results />
              </>
            }
          </>
        }
        {/* <Results /> */}
      </Layout>
      <StyledOffCanvasContainer key="offcanvas" id="___offcanvas" />
    </ScrollFadeProvider>
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
                          fluid(maxWidth: 750) {
                            ...GatsbyImageSharpFluid_noBase64
                          }
                        }
                      }
                    }
                    workFunction: function
                    qualification
                    socialLinks: social_links {
                      html
                    }
                    contact {
                      html
                    }
                    bio {
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