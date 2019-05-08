import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import fil from '../images/filter2.png'



const Filter_ARCHIVE_QUERY = graphql`
  query FilterBar {
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

const FilterList = styled.ul`

  text-align: center;

  img.fil{
    display: inline-block;
    width: 30px;
    margin-bottom: 0;
    padding-top: 5px;
    margin-right: 5px;

  }


  h2{
    font-size: 25px;
    color: black;
    display: inline-block;
    text-transform: uppercase;
    font-weight: 800;
    margin-bottom: 0px;
    margin-top: 5px;
    margin-right: 5px;
    background-color: rgb(196, 196, 196);
    border-radius: 3px;
    padding: 0px 10px;
    padding-bottom: 10px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    transition: all 0.3s ease 0s;
    
  
  }
  h2:visited { 
    color: white;
    font-size: 25px;
    text-decoration: none;
  }

  h2:hover {
    color: white;
    font-size: 25px;
    text-decoration: none;
  }



  @media (max-width: 1278px) {

    }

  

  @media (max-width: 700px) {

    h2 {
      font-size: 15px;
      margin-top: 15px;
      margin-bottom: -5px;
    }

    h2:visited {
      font-size: 15px;
    }

    h2:hover {
      font-size: 15px;
    }

    img.fil{
      display: inline-block;
      width: 20px;
      margin-bottom: 0;
      padding-top: 5px;
      margin-right: 5px;
  
    }

  }
 

`;

const Filter = () => (
  <StaticQuery
    query={Filter_ARCHIVE_QUERY}
    render={({allMarkdownRemark}) => (
      <>
       <aside>
        <FilterList>
    
          <div>
            <Link style={{textDecoration: `none`,}} to= {`/breakfast`}>
              <h2 class="text"><img class="fil" src={fil} alt="calendar" />Breakfast</h2>
            </Link>

            <Link style={{textDecoration: `none`,}} to= {`/lunch`}>
              <h2 class="text"><img class="fil" src={fil} alt="calendar" />Lunch</h2>
            </Link>
          
            <Link style={{textDecoration: `none`,}} to= {`/dinner`}>
              <h2 class="text"><img class="fil" src={fil} alt="calendar" />Dinner</h2>
            </Link>
          </div>
        
        </FilterList>
      </aside>

      </>
    )}
  />
)

export default Filter
