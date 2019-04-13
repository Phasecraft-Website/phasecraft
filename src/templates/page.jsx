import React from "react";
import PropTypes from "prop-types";
import { Layout, SEO, SliceZone } from "components";
import { graphql } from "gatsby";

function Page({ data: { prismicPage }, ...props }) {
  const {
    data: { page_title, meta_title, meta_description, meta_images, body },
    ...rest
  } = prismicPage;
  return (
    <Layout>
      <SEO title={meta_title} desc={meta_description} images={meta_images} />
      {page_title && page_title.text &&
        <h1>{page_title.text}</h1>
      }
      
    </Layout>
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
        
      }
    }
  }
`;
