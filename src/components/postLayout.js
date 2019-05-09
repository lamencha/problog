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
      <Layout  location={location}>
      <div style={{ background: `linear-gradient(-110deg, #757f9a, #4ecdc4)`,    boxShadow: `0px 2px 10px rgba(25, 17, 34, 0.4)`,
      fontFamily: `"Arial Black", Gadget, sans-serif`,
      borderRadius: `4px`,
      margin: `15px`,
      textShadow: `2px 2px 4px #7f7f7f`,
      padding: `15px 32px`,
      color: `#f4f4f4`, }}>
        <h1 style={{ color: `white`, textShadow: `2px 2px 4px #7f7f7f` }}>{markdownRemark.frontmatter.title}</h1>
        <div  
        
        dangerouslySetInnerHTML={{
          __html: markdownRemark.html
        }}/>
        </div>
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