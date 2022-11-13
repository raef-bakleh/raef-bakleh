import React from "react";
import { MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Menu } from "react-pro-sidebar";
import classes from "./Nav.module.css";
import Hamburger from "hamburger-react";
function Nav() {
  return (
    <div className={classes.nav}>
      <div className={classes.hamburger}>
        <Hamburger />
      </div>
      <Sidebar className={classes.navbar}>
        <Menu>
          <MenuItem>
            <p className={classes.para}>asdf</p>asdf
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Nav;
