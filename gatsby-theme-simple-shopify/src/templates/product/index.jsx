import React from 'react';
import { graphql } from 'gatsby';
import ProductPage from './ProductPage';
import Layout from '../../components/Layout';

export default props => (
  <Layout>
    <ProductPage {...props} />
  </Layout>
);

export const productQuery = graphql`
  query SingleProductQuery($handle: String!) {
    product: shopifyProduct(handle: { eq: $handle }) {
      title
      descriptionHtml
      images {
        id
        altText
        localFile {
          childImageSharp {
            main: fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
            thumbnail: fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      variants {
        shopifyId
        price
      }
    }
  }
`;