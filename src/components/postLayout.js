import React, { Component } from 'react'
import { graphql } from 'gatsby';
import Layout from './layout';

//static query can be used anywhere but doesn't accept variables and cant use context

//page query must be used on pages. takes in variables

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { location } = this.props;
    

    return (
      <Layout location={location}>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{
          __html: markdownRemark.html
        }}/>
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) { 
    markdownRemark(frontmatter: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }  
`