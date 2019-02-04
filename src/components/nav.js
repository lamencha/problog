import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import team from '../images/team3.webp'
import cream from '../images/cream2.webp'
import avatar from '../images/avatar.png'

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
  
  background-image: linear-gradient(141deg, #9fb8ad 51%, #1fc8db 0%);
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.2);
  padding: 1rem;
  border-radius: 4px
  text-decoration: none;
  color: #f4f4f4;


  .container {
    position: relative;
    left: 30%;
    
    max-Width: 200px;
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
    transition: .5s ease;
    opacity: 0.7;
    position: absolute;
    width: 100%;
    padding: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
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
    font-size: 16px;
    padding: 16px 32px;
    text-decoration: none;
  }


  h2{
    background-color: #000000;
    color: white;
    font-size: 16px;
    padding: 16px 32px;
    text-decoration: none;
    transition: background-color 1s;
  }
  h2:visited {
    background-color: #000000;
    color: white;
    font-size: 16px;
    padding: 16px 32px;
    text-decoration: none;
  }

  h2:hover {
    background-color: #000000;
    color: white;
    font-size: 16px;
    padding: 16px 32px;
    text-decoration: none;
  }

`

const Nav = () => (
  <StaticQuery
    query={Nav_ARCHIVE_QUERY}
    render={({allMarkdownRemark}) => (
      <>
       <aside>
       <NavList>
       <div class="container">
        <div class="image1">
          <img class="image" src={cream} alt="Avatar" ></img>
            <div  class="middle">
              <Link style={{textDecoration: `none`,}} to= {`/crop`}>
                <h2 class="text">Cream Of The Crop</h2>
              </Link>
            </div>
        </div>
      </div>

      <div class="container">
        <div class="image1">
          <img class="image" src={team} alt="Avatar" ></img>
            <div  class="middle">
              <Link  style={{textDecoration: `none`,}} to={`/about`}>
                <h2 class="text">About Us</h2>
              </Link>
            </div>
        </div>
      </div>
      
      <div class="container">
        <div class="image1">
          <img class="image" src={avatar} alt="Avatar" ></img>
            <div  class="middle">
              <Link style={{textDecoration: `none`,}} to= {`/luis`}>
                <h2 class="text">Luis Menchaca</h2>
              </Link>
            </div>
        </div>
      </div>

      <div class="container">
        <div class="image1">
          <img class="image" src={avatar} alt="Avatar" ></img>
            <div  class="middle">
              <Link  style={{textDecoration: `none`,}} to={`/bryan`}>
                <h2 class="text">Bryan Denetclaw</h2>
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
