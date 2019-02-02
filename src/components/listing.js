import React from 'react'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'
import gen from '../images/gen.jpg'

const LISTING_QUERY = graphql `
    query BlogPostListing {
        allMarkdownRemark(limit: 10, sort: {
        order: DESC,
        fields: [frontmatter___date]
        }) {
        edges {
            node{
                excerpt
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    slug
                }
            }        
        }
        }
    }
`

const Post = styled.article`
background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
    box-shadow: 0px 2px 10px rgba(25, 17, 34, 0.4);
    padding: 1.5rem;
    border-radius: 4px;
    margin: 15px;
    color: #f4f4f4;
    justify-content: space-evenly;
     

    
    a {
        color: #f4f4f4;
        text-decoration: none;
    }
    h2 {
        margin-bottom: 0;
    }
    p {
        font-size: 1rem;
    }

    
    .read-more {
        background-color: #70BFE0 ;
        box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.1);
        border: none;
        
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        
        margin: 4px 2px;
        cursor: pointer;
        font-size: 0.8rem;
        text-decoration: none;
        color: #f4f4f4;
        transition: font-size 1s;
        transition: padding 1s;
    }
    .read-more:hover {
        color: #f4f4f4;
        font-size: 0.8rem;
        padding: 15px 50px;
    }
    .dot {
        height: 150px;
        width: 150px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        text-align: left;

        
      }



`

const Listing = () => (
    <StaticQuery
        query={LISTING_QUERY}
        render={({allMarkdownRemark}) => (
            allMarkdownRemark.edges.map(({node}) => (
                
                <Post key={node.frontmatter.slug}>
                    <Link to={`/posts${node.frontmatter.slug}`}>
                        <h2>{node.frontmatter.title}</h2>
                    </Link>
                    <p>{node.frontmatter.date} </p>
                    
                    <span class="dot"> <img src={gen} alt="gen" /></span>
                    
                   
                    <p>{node.excerpt} </p>
                    <Link class="read-more" to={`/posts${node.frontmatter.slug}`}>Read More</Link>
                    
                    
                </Post>
                
            ))
            
        )}
        
    />
    
)

export default Listing