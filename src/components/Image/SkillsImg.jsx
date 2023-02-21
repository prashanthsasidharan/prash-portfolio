import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const SkillsImg = ({ filename }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: { extension: { in: "svg" } }) {
          nodes {
            publicURL
          }
        }
      }
    `}
    render={(data) => {
      const publicUrl = data.images.nodes.find((n) => {
        return n.publicURL.includes(filename);
      });

      console.log(publicUrl);

      if (!publicUrl) return null;

      // console.log(image);

      // const imageFluid = image.node.childImageSharp.fluid;
      return <Img src={publicUrl.publicUrl} alt="" />;
    }}
  />
);

SkillsImg.propTypes = {
  filename: PropTypes.string,
};

export default SkillsImg;
