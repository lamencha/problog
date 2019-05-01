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
  border-radius: 15px 50px;
  background-image: linear-gradient(141deg, #9fb8ad 51%, #1fc8db 20%);
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.2);
  padding: 1rem;
  border-radius: 4px
  text-decoration: none;
  color: #f4f4f4;


  .container {
    position: relative;
    left: 0%;
    
    
    display: inline-block;
    padding: 10px;
  }
  
  .image {
    background-color: white;
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
    
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    text-shadow: 3px 2px #ffb366;
    display: block;
         
    cursor: pointer;
    font-size: 2rem;
    text-decoration: none;
    color: black;
    transition: font-size 3.2s;
    transition: padding 1s;
    transform: skewY(-1.0deg);
  }
  
  .container:hover .image {
    opacity: 0.3;
  }
  
  .container:hover .middle {
    opacity: 1;
  }
  
  .text {
    background-color: white;
    color: black;
    font-size: 0.8em;
    padding: 16px 32px;
    text-decoration: none;
  }


  h2{
    background-color: #000000;
    color: white;
    font-size: 0.8em;
    padding: 16px 32px;
    text-decoration: none;
    transition: background-color 1s;
  }
  h2:visited {
    background-color: #000000;
    color: white;
    font-size: 0.8em;
    padding: 16px 32px;
    text-decoration: none;
  }

  h2:hover {
    background-color: grey;
    color: white;
    font-size: 0.8em;
    padding: 16px 32px;
    text-decoration: none;
  }

  @media (max-width: 1872px) {
    .container {
      position: relative;
      left: 10%;
      max-Width: 150px;
      display: inline-block;
      padding: 10px;
    }

  

  @media (max-width: 700px) {
    .container {
      position: relative;
      padding: 10px;
      max-Width: 150px;
      display: inline-block;
      
    }

  }
  

  @media (max-width: 420px) {
    .container {
      position: inherit;
      padding: 0px;
      max-Width: 100%;
      display: block;
      
    }

    .image{
      display: none;
    }

    .middle {
      transition: .5s ease;
      opacity: 0.7;
      position: inherit;
      width: 100%;
      padding: 0px;
      top: 100%;
      left: 100%;
      transform: translate(0%, 0%);
      -ms-transform: translate(0%, 0%);
      text-align: center;
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
      
            <div  class="middle">
              <Link style={{textDecoration: `none`,}} to= {`/crop`}>
                <h2 class="text">Cream Of The Crop</h2>
              </Link>
            </div>
        </div>
      </div>

      <div class="container">
        <div class="image1">
         
            <div  class="middle">
              <Link  style={{textDecoration: `none`,}} to={`/about`}>
                <h2 class="text">About Us</h2>
              </Link>
            </div>
        </div>
      </div>
      
      <div class="container">
        <div class="image1">
         
            <div  class="middle">
              <Link style={{textDecoration: `none`,}} to= {`/luis`}>
                <h2 class="text">Luis Menchaca</h2>
              </Link>
            </div>
        </div>
      </div>

      <div class="container">
        <div class="image1">
        
            <div  class="middle">
              <Link  style={{textDecoration: `none`,}} to={`/bryan`}>
                <h2 class="text">Bryan Denetclaw</h2>
              </Link>
            </div>
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
