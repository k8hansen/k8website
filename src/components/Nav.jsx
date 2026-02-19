import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavWrapper>
      <Hamburger onClick={toggleMenu} isOpen={isOpen}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>

      <NavMenu isOpen={isOpen}>
        <li>
          <Link href='/' onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link href='/about' onClick={() => setIsOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link href='/lab' onClick={() => setIsOpen(false)}>
            Lab
          </Link>
        </li>
        <li>
          <Link
            href='mailto:k8hansen@gmail.com'
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
      </NavMenu>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  position: relative;
  padding: 1rem;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 12px;
  z-index: 1001;

  span {
    width: 25px;
    height: 3px;
    background-color: black;
    margin: 3px 0;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 2px;
  }

  ${(props) =>
    props.isOpen &&
    `
    span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
  `}

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  margin-bottom: 5em;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    flex-direction: column;
    background-color: white;
    width: 100%;
    height: 100vh;
    padding: 80px 20px 20px;
    transform: ${(props) =>
      props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 1000;
    margin-bottom: 0;

    li {
      margin: 15px 0;
      padding: 0;
    }

    a {
      font-size: 1.5rem;
      padding: 15px 30px;
      width: 100%;
      text-align: center;
    }
  }
`;

export default Nav;
