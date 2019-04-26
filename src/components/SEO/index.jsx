import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Facebook from './Facebook';
import Twitter from './Twitter';
import texture from '../../../assetts/images/texture-1366@2x.png'

// Complete tutorial: https://www.gatsbyjs.org/docs/add-seo-component/

const SEO = ({ title, desc, pathname, author, images }) => {
  const {
    site: { defaultMeta },
    meta: { lang, data },
  } = useStaticQuery(query);

  const siteLanguage = lang.split('-')[0];
  const ogLanguage = `${lang.split('-')[0]}_${lang
    .split('-')[1]
    .toUpperCase()}`;

  const { url, default_author, twitter, facebook } = defaultMeta;
  const {
    default_meta_title,
    default_meta_image,
    default_meta_description,
    meta_title_prefix,
  } = data;

  const metaImages = [];

  if (images !== null) metaImages.push(...images);

  // const seo = {
  //   title: `${meta_title_prefix} ${title || default_meta_title}`,
  //   description: desc || default_meta_description,
  //   image: `${metaImages[0] ? metaImages[0].url : default_meta_image.url}`,
  //   url: `${url}${pathname || ''}`,
  //   author: author || default_author,
  // };

  const seo = {
    title: 'PhaseCraft',
    description: 'USING DISRUPTIVE THEORY TO UNLOCK THE POWER OF QUANTUM COMPUTING',
    image: texture,
    url: `${url}${pathname || ''}`,
    author: author || default_author,
  };

  return (
    <>
      {/* <Helmet title={seo.title}> */}
      <Helmet title="PhaseCraft">
        <html lang={siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {/* {!article && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>}
        {article && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>}
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script> */}
      </Helmet>
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type="website"
        url={seo.url}
        locale={ogLanguage}
        name={facebook}
      />
      <Twitter
        title={seo.title}
        image={seo.image}
        desc={seo.description}
        username={twitter}
      />
    </>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  author: PropTypes.string,
  pathname: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
};

SEO.defaultProps = {
  title: null,
  desc: null,
  author: null,
  pathname: null,
  images: null,
};

const query = graphql`
  query SEO {
    meta: prismicGlobal {
      lang
      last_publication_date(formatString: "YYYY-MM-DD")
      data {
        menu_toggle_variation
        default_meta_title
        default_meta_description
        meta_title_prefix
        default_meta_image {
          url
        }
      }
    }
    site {
      defaultMeta: siteMetadata {
        default_author: author
        logo
        url
        twitter
        facebook
      }
    }
  }
`;
