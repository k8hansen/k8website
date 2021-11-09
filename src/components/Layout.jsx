import styles from "../styles/globalStyles.js";
import Nav from "../components/Nav";
import MyHead from "../components/MyHead.jsx";

import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <MyHead />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
