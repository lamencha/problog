import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'



const Nav_ARCHIVE_QUERY = graphql`
  query NavBar {
    allMarkdownRemark(limit: 5, sort: {
      order: DESC,
      fields: [frontmatter___date]
    }) {
      edges {
          node{
              frontmatter {
                title
                slug
              }
          }        
      }
    }
  }
  `

const NavList = styled.ul`

  padding: 0;
  margin: 15px;
  list-style: none;
  border-radius: 15px 15px;
  background-image: linear-gradient(-141deg, #757f9a 41%, #4ecdc4 80%);
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.2);
  padding: 1rem;
  border-radius: 4px
  text-decoration: none;
  color: #f4f4f4;
  text-align: center;
  

  .container {
    position: relative;
    left: 0%;
    display: inline-block;
    padding: 10px;
  }
  
  .image {
    background-color: #fff;
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
  }
  
  .middle {
    
    background-color: #70BFE0 ;
    background-image:
    radial-gradient(#96d0e8 20%, transparent 0), 
    radial-gradient(#96d0e8 15%, transparent 0);
    background-size: 30px 30px;
    background-position: 0 0, 15px 15px;
    box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.1);
    border: 5px;
    border-style: dashed;
    
    padding: 10px 15px 0px;
    text-align: center;
    text-decoration: none;
    text-shadow: 3px 2px #ffb366;
    display: block;
         
    cursor: pointer;
    font-size: 2em;
    text-decoration: none;
    color: black;
    transition: font-size 3.2s;
    transition: padding 1s;
    transform: skewX(-18deg);
  }

  .middle:hover {
    background-color: #61accc ;
  }
  
  .container:hover .image {
    opacity: 0.3;
  }
  
  .container:hover .middle {
    opacity: 1;
  }
  
  .text {
    
    color: black;
    font-size: 25px;
    padding: 5px 0px;
    text-decoration: none;
  }


  h2{
 
    font-size: 25px;
    
    text-decoration: none;
    transition: background-color 1s;
  }
  h2:visited {
    
    color: #fff;
    font-size: 25px;
    
    text-decoration: none;
  }

  h2:hover {
    
    color: #fff;
    font-size: 25px;
    
    text-decoration: none;
  }

  @media (max-width: 1278px) {
    .container {
      display: block;
      padding: 10px;
    }

  

  @media (max-width: 700px) {
 
    .container {
      position: inherit;
      padding: 5px;
      max-Width: 100%;
      display: block;
 
    }

    .image{
      display: none;
    }

    .middle {
      transition: .5s ease;
      width: 100%;
      height: 60px;
      padding: 5px 0px;


    }
    .text {
      padding: 10px 0px;
      color: black;
      font-size: 15px;
      
      text-decoration: none;
    }

    h2{
      
      font-size: 15px;
      text-decoration: none;
      transition: background-color 1s;
    }
    h2:visited {
      
      color: #fff;
      font-size: 15px;
      text-decoration: none;
    }
  
    h2:hover {
      
      color: #fff;
      font-size: 15px;
      text-decoration: none;
    }

    
  }
 

`;

const Nav = () => (
  <StaticQuery
    query={Nav_ARCHIVE_QUERY}
    render={({allMarkdownRemark}) => (
      <>
       <aside>
       <NavList>
  
<div>
         
       <div class="container">
        <div class="image1">
        <Link style={{textDecoration: `none`,}} to= {`/crop`}>
            <div  class="middle">
              
                <h2 class="text">Cream Of The Crop</h2>
              
            </div>
            </Link>
        </div>
      </div>

      <div class="container">
        <div class="image1">
        <Link  style={{textDecoration: `none`,}} to={`/about`}>
            <div  class="middle">
              
                <h2 class="text">About Us</h2>
              
            </div>
            </Link>
        </div>
      </div>
      
      <div class="container">
        <div class="image1">
         
        <Link style={{textDecoration: `none`,}} to= {`/luis`}>
            <div  class="middle">
             
                <h2 class="text">Luis Menchaca</h2>
              
            </div>
            </Link>
        </div>
      </div>

      <div class="container">
        <div class="image1">
        <Link  style={{textDecoration: `none`,}} to={`/bryan`}>
            <div  class="middle">
              
                <h2 class="text">Bryan Denetclaw</h2>
              
            </div>
            </Link>
        </div>
      </div>
      </div>
      
           </NavList>
       </aside>

      </>
    )}
  />
)

export default Nav
