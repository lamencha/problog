import React from 'react'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'



const LISTING_QUERY = graphql `
    query BlogPostListing {
        allMarkdownRemark(limit: 10, sort: {
        order: DESC,
        fields: [frontmatter___date]
        }) {
        edges {
            node{
                excerpt(pruneLength: 280)
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    slug
                    image
                    crop
                    rate
                }
            }        
        }
        }
    }
`

const Post = styled.article`
background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
    box-shadow: 0px 2px 10px rgba(25, 17, 34, 0.4);
    
    border-radius: 4px;
     
    color: #f4f4f4;
         
    a {
        color: #f4f4f4;
        text-decoration: none;
        text-shadow: 2px 2px 4px #7f7f7f;
        margin-top: 0px;
        
    }
    a:hover  {
        text-shadow: 2px 2px 4px #7f7f7f;
        margin-top: 0px;
        color: #c1edff;

    }

    p {
        font-size: 1.4rem;
        display: block;
    }

    .read-more {
        background-color: #70BFE0 ;
        box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.1);
        border: none;
        
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: block;
             
        cursor: pointer;
        font-size: 1rem;
        text-decoration: none;
        color: #f4f4f4;
        transition: font-size 1.2s;
        transition: padding 1s;
       
    }
    .read-more:hover {
        background-color: #5ea4c1 ;
        color: #f4f4f4;
        font-size: 1rem;
        
    }
    .dot {
        height: 250px;
        width: 250px;
        display: inline-block;
        
      }

      .rate {
        width: 120px;
        height : 25px;
        display: block;
        text-align: left;
 
      }

      .side {
        display: inline-block;
        width: 70%;
        height : 100%;
        margin-top: 5px;
        
        

    }
      .side1 {
        display: inline-block;
        padding: 1.5rem;
             
      }
      h1 {
          margin-top: 0px;
      }

      @media (max-width: 700px) {
        text-align: center;

        .rate {
            position:relative;
            width: 120px;
            height : 25px;
            left: 28%;
     
          }

      }


`

const Listing = () => (
    <StaticQuery
        query={LISTING_QUERY}
        render={({allMarkdownRemark}) => (
            allMarkdownRemark.edges.map(({node}) => (
                
                <Post key={node.frontmatter.slug}>
                <div class="side1"><img class="dot" src={node.frontmatter.image} alt="article tumbnail" /></div>
                <div class="side">
                    <Link to={`/posts${node.frontmatter.slug}`}>
                        <h1>{node.frontmatter.title}</h1>
                        
                    </Link>
                    <p>{node.frontmatter.date} </p>
                    <img class="rate" src={node.frontmatter.rate} alt="Rating" />
                                                            
                    
                                                           
                    <p>{node.excerpt} </p>
                    
                    <br></br>
                    </div> 
                    <Link class="read-more" to={`/posts${node.frontmatter.slug}`}>Read More</Link>
                </Post>
                
            ))
            
        )}
        
    />
    
)

export default Listing