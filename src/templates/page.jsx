import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, SEO, SliceZone, Contact } from 'components';
import { graphql } from 'gatsby';

const StyledOffCanvasContainer = styled.div`
  height: 100%;
`

function Page({ data: { prismicPage }, ...props }) {
  const {
    data: { page_title, meta_title, meta_description, meta_images, body },
    ...rest
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
              <h1>{page_title.text}</h1>
            }
          </>
        }
        
      </Layout>
      <StyledOffCanvasContainer key="offcanvas" id="___offcanvas" />
    </>
  );
}
export default Page;
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
        }
      }
    }
  }
`;