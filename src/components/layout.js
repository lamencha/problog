import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import { Spring } from 'react-spring'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Archive from './archive'
import Nav from './nav'
import './layout.css'
import Toggle from './toggle'


const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
  

  image {
    max-width: 20%;
    max-height: 20%;
    z-index: 1;
  }

  button {
    display: none;

  }


  .ham {
    
    height: 5px;
    background-color: #000;
    margin: 6px 0;
    width: 100%;
  }

  footer {
    position: static;
    
    width: 100%;
    margin-bottom: -50px;
    height: 500px;
    list-style: none;
    border-radius: 15px 15px;
    background-image: linear-gradient(-141deg, #757f9a 41%, #4ecdc4 80%);
    box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.2);
    padding: 1rem;
    border-radius: 4px
    text-decoration: none;
    color: #f4f4f4;
    text-align: center;
    text-shadow: 3px 2px #ffb366;
    font-family: "Arial Black", Gadget, sans-serif;
  }




@media (min-width: 1287px) {
  .small {
    display: none;  
   }
}

  @media (max-width: 700px) {
    max-width: 100%;
    margin: 0rem auto;
    grid-template-columns: 1fr ;
    font-family: "Arial Black", Gadget, sans-serif;

    button {
      font-family: "Arial Black", Gadget, sans-serif;
      display: block;
      background-color: #70BFE0 ;
      background-image:
      radial-gradient(#96d0e8 20%, transparent 0), 
      radial-gradient(#96d0e8 15%, transparent 0);
      background-size: 30px 30px;
      background-position: 0 0, 15px 15px;
      box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.4);
      border: 5px;
      border-style: dashed;
      width: 100%;
      height: 50px;
      padding: 0px 5px;
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

 .big {
  display: none;  
 }
  }
 
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }  
        file(relativePath: {
          regex: "/bg2p/"
        }) {
          childImageSharp {
            fluid(maxWidth: 4032) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <title>AZ Zenheads</title>
        <meta name="Description" content="A simple blog about anything"></meta>
        <br></br>
        <Spring
          from={{ height: location.pathname === '/' ? 200 : 300 }}
          to={{ height: location.pathname === '/' ? 300 : 200 }}
          >
          {styles => (
            <div style={{display: 'none', ...styles}}>
           
            <Img fluid={data.file.childImageSharp.fluid} >
            </Img>
            
            </div>
          )}
          
          </Spring>
        { /*location.pathname === '/' && (
        <Img fluid={data.file.childImageSharp.fluid} />
          )}*/}
         
        <MainLayout>
          
          
          <div>
          <div class="big">
           <Nav  />
          </div >
          <Toggle>
            <div class="small" >
          <Nav />
          </div>
          </Toggle>
          {children}
          </div>
          <Archive />
          <footer>
          
            © {new Date().getFullYear()}
            {` `}
            <a href="https://twitch.tv/mnstrpenguin">MnstrPenguin</a>
            <br></br>
          </footer>
        </MainLayout>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}

export default Layout
