import Link from "next/link";
import styled from "styled-components";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/lab">Lab</Link>
        </li>
        <li>
          <Link href="mailto:k8hansen@gmail.com">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
