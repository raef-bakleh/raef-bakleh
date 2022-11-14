import React, { useState } from "react";
import { MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Menu } from "react-pro-sidebar";
import classes from "./Nav.module.css";
import Hamburger from "hamburger-react";
function Nav({ navi }) {
  const [show, setShow] = useState();
  const hideShowNav = () => {
    setShow(!show);
  };

  return (
    <div
      onClick={() => {
        navi(show);
      }}
      className={classes.nav}
    >
      <div className={classes.hamburger}>
        <Hamburger toggled={false} toggle={hideShowNav} />
      </div>
    </div>
  );
}

export default Nav;
