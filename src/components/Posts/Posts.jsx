import React from 'react';
import { Link } from 'gatsby';
import './Posts.css';

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const posts = (
    edges.map(({ node }) => (
      <div key={node.fields.slug} className="post">
        <Link to={node.fields.slug} className="post-title"><h2>{node.frontmatter.title}</h2></Link>
        <p className="post-date">{node.frontmatter.date}</p>
        <p>{node.frontmatter.description}</p>
      </div>
    ))
  );
  return ( 
    <div className="posts">
      {posts}
    </div>
  )
}   