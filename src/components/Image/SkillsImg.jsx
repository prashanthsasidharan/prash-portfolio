import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image/withIEPolyfill';

const SkillsImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 75, height: 75) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      const imageFixed = image.node.childImageSharp.fixed;
      return <Img alt={alt} fixed={imageFixed} objectFit="cover" objectPosition="50% 50%" />;
    }}
  />
);

SkillsImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default SkillsImg;
