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

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;

  image {
    max-width: 20%;
    max-height: 20%;
  }

  @media (max-width: 700px) {
    max-width: 100%;
    margin: 0rem auto;
    grid-template-columns: 1fr ;
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
          regex: "/bg2/"
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
        <Spring
          from={{ height: location.pathname === '/' ? 100 : 200 }}
          to={{ height: location.pathname === '/' ? 200 : 100 }}
          >
          {styles => (
            <div style={{overflow: 'hidden', ...styles}}>
            <Img fluid={data.file.childImageSharp.fluid} />
            </div>
          )}
          </Spring>
        { /*location.pathname === '/' && (
        <Img fluid={data.file.childImageSharp.fluid} />
          )}*/}
        <MainLayout>
          
          <div>
          <Nav />
          {children}
          </div>
          
          <Archive />
          <footer>
          
            © {new Date().getFullYear()}
            {` `}
            <a href="https://twitch.tv/mnstrpenguin">MnstrPenguin</a>
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
