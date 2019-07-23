import React from 'react';
import { graphql } from 'gatsby';

const NewsPost = ({ data: { prismicNews } }) => {
  console.log(prismicNews);
  return (
    <h1>News Post</h1>
  );
}

export default NewsPost;

// export const pageQuery = graphql`
//   query NewsPage($uid: String!) {
//     prismicNews(uid: { eq: $uid }) {
//       id
//       uid
//       data {
//         published(formatString: "DD.MM.YY")
//         title {
//           text
//         }
//         type {
//           text
//         }
//         body {
//           primary {
//             content {
//               text
//             }
//           }
//         }
//       }
//     }
//   }
// `;
