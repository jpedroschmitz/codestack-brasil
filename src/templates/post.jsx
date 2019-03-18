import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import _ from "lodash";
import SEO from '../components/SEO/SEO';
import Layout from "../components/Layout";

export default class Post extends Component {
  render() {
    const { data } = this.props;
    const { fields } = data.markdownRemark;
    const { slug } = fields;
    const { title, tags, date, description } = data.markdownRemark.frontmatter;
    const { html } = data.markdownRemark; 
    return (
      <Layout>
        <div style={{ backgroundColor: '#FFF', width: '100%', padding: '1.5rem', borderRadius: '0.50rem', margin: '10px 15px'}}>
          <SEO title={title} url={slug} description={description} article />
          <h2 style={{ fontSize: '22px', fontWeight: 'bold' }}>{title}</h2>
          <p>{tags.map(tag => <Link style={{ color: '#000', marginRight: '10px' }} key={tag} to={`/tag/${_.kebabCase(tag)}`}>{tag}</Link>)}</p>
          <p>{date}</p>
          <div className="content">
            <p dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </Layout>
    )
  }
};

export const pageQuery = graphql`
  query PostPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } } ) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        tags
        description
      }
      fields {
        slug
      }
    }
  }
`;