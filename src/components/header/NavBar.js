import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";

import DropMenu from "./DropMenu";

import CATEGORIES_QUERY from "../../queries/category/categories";
import AUTHORS_QUERY from "../../queries/author/authors";
import universalStyles from "../../utils/universalStyles";

import logo from "../../img/schmiedeOneLogo.svg";

const useStyles = makeStyles((theme) => ({
  navBar: {
    height: "70px",
    [theme.breakpoints.up("sm")]: {
      height: "30px",
    },
    margin: "30px 0 30px 0",
  },

  navMenuList: {
    listStyleType: "none",
    padding: "16px",
  },

  navMenuItem: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      float: "right",
    },
  },

  navHomeButton: {
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      float: "left",
    },
  },
}));

const Nav = () => {
  const classes = useStyles();
  const universalClasses = universalStyles();
  return (
    <div className={universalClasses.container}>
      <div className={classes.navBar}>
        <ul className={classes.navMenuList}>
          <li key={"homeButton"} className={classes.navHomeButton}>
            <Link to="/">
              <img src={logo} alt={"schmiede.ONE Logo"} />
            </Link>
          </li>
          <li className={classes.navMenuItem}>
            <DropMenu
              query={CATEGORIES_QUERY}
              queryName={"categories"}
              extension={"category"}
            />
            <DropMenu
              query={AUTHORS_QUERY}
              queryName={"authors"}
              extension={"author"}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
