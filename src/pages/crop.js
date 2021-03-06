import React from 'react'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import cal from '../images/cal2.png'
import Filter from './filter'


const LISTING_QUERY = graphql `
query CropPostListing {
    allMarkdownRemark(filter: { frontmatter: { crop: {eq: 1 } } } ) {
    edges {
        node{
            excerpt
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
background: #2CB5E8;
background: -webkit-radial-gradient(top right, #2CB5E8, #97B6A5);
background: -moz-radial-gradient(top right, #2CB5E8, #97B6A5);
background: radial-gradient(top right, #2CB5E8, #97B6A5);

    box-shadow: 0px 2px 10px rgba(25, 17, 34, 0.4);
    font-family: "Arial Black", Gadget, sans-serif;
    border-radius: 4px;
    margin: 15px; 
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
        color: #000;

    }

    p {
        font-size: 1.4rem;
        display: block;
        text-shadow: 2px 2px 4px #7f7f7f;
    }

    .read-more {
        background-color: #70BFE0 ;
        background-image:
        radial-gradient(#96d0e8 20%, transparent 0), 
        radial-gradient(#96d0e8 15%, transparent 0);
        background-size: 30px 30px;
        background-position: 0 0, 15px 15px;
        box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.1);
        border: 5px;
        border-style: dashed;
        
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        text-shadow: 3px 2px #ffb366;
        display: block;
             
        cursor: pointer;
        font-size: 1rem;
        text-decoration: none;
        color: #000;
        transition: font-size 3.2s;
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
        display: flex;
        
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

      .cal{
          width: 30px;
          length: 30px;
      }


      @media (max-width: 700px) {
        text-align: center;
        padding: 0px;

        .rate {
            position:relative;
            width: 120px;
            height : 25px;
            left: 30%;
     
          }

          .dot {
            height: 150px;
            width: 150px;
            display: inline-block;
            
            

          }
          .side1 {
            display: block;
            padding: 0px 0px;
            
                 
          }
          side {
            display: inline-block;
            width: 100%;
            margin-top: 5px;
            color: #000;
            
            
                 
          }
          span.side {
              width: 90%;
              
          }

          span.side1 {
            height: 150px;
          }

      }


`
const Crop = ({location}) => (
    <Layout location={location} >
    <Filter  />
    <StaticQuery
        query={LISTING_QUERY}
        render={({allMarkdownRemark}) => (
            allMarkdownRemark.edges.map(({node}) => (
                
                <Post key={node.frontmatter.slug}>
                
                <span class="side1"><img class="dot" src={node.frontmatter.image} alt="article tumbnail" /></span>
                <span class="side">
                    <Link to={`/posts${node.frontmatter.slug}`}>
                        <h1>{node.frontmatter.title}</h1>
                        
                    </Link>
                    <p> <img class="cal" src={cal} alt="calendar" /> {node.frontmatter.date} </p>
                    <img class="rate" src={node.frontmatter.rate} alt="Rating" />
                                                            
                    
                                                           
                    <p>{node.excerpt} </p>
                    
                    <br></br>
                    </span> 
                    
                    <Link class="read-more" to={`/posts${node.frontmatter.slug}`}>Read More</Link>
                    
                </Post>
                
            ))
            
        )}
        
    />

</Layout>
    
)

export default Crop