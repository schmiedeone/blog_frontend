import { Button } from "@material-ui/core";
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
    color: theme.palette.primary.contrastText,
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

  navAboutButton: {
    fontSize: "20px",
    fontWeight: "600",
    transformText: "uppercase",
    color: theme.palette.primary.contrastText,
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
          </li>
          <li className={classes.navMenuItem}>
            <DropMenu
              query={AUTHORS_QUERY}
              queryName={"authors"}
              extension={"author"}
            />
          </li>
          <li className={classes.navMenuItem}>
            <Button>
              <Link to="/about" className={classes.navAboutButton}>
                about
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
