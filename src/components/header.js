import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components';
import zen2 from '../images/zen3.png'

const HeaderWrapper = styled.div`
  background-image: linear-gradient(141deg, #556270 86%, #1fc8db 0%, #4ecdc4 0%);
  
 
    .pic {
      
      max-Width: 408.8px;
      max-Height: 272.53px;
    margin-bottom: 0;
    -webkit-filter: grayscale(0%);filter: grayscale(0%);
    transition: -webkit-filter 1s;
  }

  .pic:hover {
    
    -webkit-filter: grayscale(100%);filter: grayscale(100%);
  }

  .container {
    position: relative;
    left: 70%;
    
    max-Width: 200px;
    display: inline-block;
    padding: 10px;
  }
  
  .image {
    background-color: #556270;
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
    color: #fff;
    font-size: 16px;
    padding: 16px 32px;
    text-decoration: none;
  }




  h2{
    background-color: #4CAF50;
    color: #fff;
    font-size: 16px;
    padding: 16px 32px;
    text-decoration: none;
  }
  h2:visited {
    background-color: #4CAF50;
    color: #fff;
    font-size: 16px;
    padding: 16px 32px;
    text-decoration: none;
  }

  h2:hover {
    background-color: #4CAF50;
    color: #fff;
    font-size: 16px;
    padding: 16px 32px;
    text-decoration: none;
  }

  p{
    position: absolute;
    display: inline-block;
    color: #fff;
    text-align: center;
    
    width: 100%;
    margin-top: 100px;
    text-shadow: 2px 2px #ffb366;

  }

  .left {
    background-image: linear-gradient(141deg, #556270 50%, #1fc8db 20%, #4ecdc4 40%);
    
    height: 50px;
    width: 100%;
    z-index: auto;
    box-shadow: 0px 20px #ffb366;
  }

  .right {
    background-image: linear-gradient(141deg, #556270 50%, #1fc8db 20%, #4ecdc4 40%);
    
    height: 50px;
    width: 100%;
    z-index: auto;
 
  }

  @media (max-width: 700px) {
    .pic {
      max-Width: 154.4px;
      max-Height: 126.26px;
  }
  .left {
    height: 15px;
    box-shadow: 0px 10px #ffb366;
  }
  .right {
    height: 15px;
  }
  p {
    margin-top: 50px
  }
}
@media (max-width: 360px) {
  .pic {
    max-Width: 150px;
    max-Height: 100px;
}
}

`;


const HeaderContainer = styled.div`
  margin: 0 auto;
  maxWidth: 960px;
  
`;

const Header = ({ siteTitle }) => (
  
  
  <HeaderWrapper>

     
    <HeaderContainer>
    <h1 style={{ margin: 0 }}>
    <p>A Blog</p>
        <Link to="/">
          <img class="pic" src={zen2} alt="zen" />
          
        </Link>
        
      </h1>
      
    <div class="left" > 
    <div class="right" >
    </div>
    </div>
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
