import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
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

const ArchiveList = styled.ul`
  padding: 0;
  margin: 15px;
  list-style: none;
  
  background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
  border-radius: 15px 50px;
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.2);
  padding: 1rem;
  border-radius: 4px
  text-decoration: none;
  color: #f4f4f4;




    div {
      background-color:  #70BFE0;
      box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.1);
      border-radius: 15px 50px;
      border: none;
      color: #f4f4f4;
      padding: 15px 32px;
      text-align: center;
      text-decoration: underline;
      display: inline-block;
      margin: 4px 2px;
      transition: padding 1s;
      
    }

    div:hover {
      padding: 15px 45px;
    }
    
  a {
    border: none;
    padding: 0px 0px;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-size: 1.3rem;
    text-decoration: none;
    color: #f4f4f4;
    transition: font-size 1s;
    transition: border-bottom 0.4s;
  }
  a:visited {
    font-size: 1rem;
    color: #f4f4f4;
    text-decoration: none;
    transition: font-size 1s;
    
  }
  a:hover {
    color: #1B6DA3;
    font-size: 1.3rem;
    text-decoration: none;
    border-bottom: 3px solid #f69064;
  }

  @media (max-width: 700px) {
    a{
      font-size: 1.3rem;
    }

    div{
      width: 100%;
      padding: 15px 32px;
    }
    
  }

`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({allMarkdownRemark}) => (
      <>
       <aside>
       <ArchiveList>
         <div>
           <h3>Archive</h3>
           
           {allMarkdownRemark.edges.map(edge => (
               <li key={edge.node.frontmatter.slug}>
                  <Link to={`/posts${edge.node.frontmatter.slug}`}>
                  {edge.node.frontmatter.title}
                  </Link> 
               </li>
           ))}
           </div>
           </ArchiveList>
       </aside>

      </>
    )}
  />
)

export default Archive
