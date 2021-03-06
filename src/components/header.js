import React from 'react'
import styled from '@emotion/styled';
import {css} from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  
  &.currentPage {
    border-bottom: 2px solid #222;
  }
`;

const Header = function ({}) {
  return (
      <header
          css={css`
            background: #eee;
            border-bottom: 1px solid #ddd;
            display: flex;
            justify-content: space-between;
            padding: 0.5rem calc((100vw - 550px)/2)
          `}
      >
        <NavLink to="/" fontWieght="bold">FEM Workshop</NavLink>
        <nav css={css`margin-top: 0`}>
          <NavLink to="/" activeClassName="currentPage">Home</NavLink>
          <NavLink to="/about" activeClassName="currentPage">About</NavLink>
        </nav>
      </header>
  )
};

export default Header;