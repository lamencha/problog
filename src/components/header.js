import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components';
import zen from '../images/zen.png'
import avatar from '../images/avatar.png'

const HeaderWrapper = styled.div`
  background-image: linear-gradient(141deg, #556270 0%, #1fc8db 51%, #4ecdc4 75%);
    .pic {
    margin-bottom: 0;
    -webkit-filter: grayscale(100%);filter: grayscale(100%);
    transition: -webkit-filter 1s;
  }

  .pic:hover {
    -webkit-filter: grayscale(0%);filter: grayscale(0%);
  }

  .container {
    position: relative;
    left: 70%;
    
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
    opacity: 0;
    position: absolute;
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
    background-color: #4CAF50;
    color: white;
    font-size: 16px;
    padding: 16px 32px;
    text-decoration: none;
  }


  h2{
    background-color: #4CAF50;
    color: white;
    font-size: 16px;
    padding: 16px 32px;
    text-decoration: none;
  }
  h2:visited {
    background-color: #4CAF50;
    color: white;
    font-size: 16px;
    padding: 16px 32px;
    text-decoration: none;
  }

  h2:hover {
    background-color: #4CAF50;
    color: white;
    font-size: 16px;
    padding: 16px 32px;
    text-decoration: none;
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  maxWidth: 960;
  padding: 1rem;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img class="pic" style={{
            
            minWidth: '10%',
            maxWidth: '408.8px',
            minHeight: '10%',
            maxHeight:'272.53px',
                      
          }}
            src={zen} alt="zen" />
        </Link>
      
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
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
