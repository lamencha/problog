import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components';
import zen from '../images/zen.png'

const HeaderWrapper = styled.div`
  background-image: linear-gradient(141deg, #556270 0%, #1fc8db 51%, #4ecdc4 75%);
    img {
    margin-bottom: 0;
    -webkit-filter: grayscale(100%);filter: grayscale(100%);
    transition: -webkit-filter 1s;
  }

  img:hover {
    -webkit-filter: grayscale(0%);filter: grayscale(0%);
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
          <img style={{
            
            minWidth: '10%',
            maxWidth: '408.8px',
            minHeight: '10%',
            maxHeight:'272.53px',
            
            
            
          }}
            src={zen} alt="zen" />
        </Link>
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
