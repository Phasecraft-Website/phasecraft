/**
* Link Resolver
* Figures out the URL of a page, based on the doc input.
*/

const linkResolver = () => doc => {
  // Default to root of site
  let url = '/';
  if (doc === null) return url;
  switch (doc.type) {
    // doc.type is the type alias from Prismic.
    // If a URL structure is specific, based on the type of
    // the Prismic custom type, use the following syntax:
    // case 'blog':
    //   url = `/blog/${doc.uid}`;
    default:
      url = `/${doc.uid}`;
  }
  return url;
};

// Old Skool export, because this is used during serverside rendering

module.exports = linkResolver
