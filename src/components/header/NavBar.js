import { Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
import { Link } from "react-router-dom";

import DropMenu from "./DropMenu";
import MobileMenu from "./MobileMenu";

import CATEGORIES_QUERY from "../../queries/category/categories";
import AUTHORS_QUERY from "../../queries/author/authors";
import universalStyles from "../../utils/universalStyles";

import logo from "../../img/schmiede_logo_white.png";

const useStyles = makeStyles((theme) => ({
  navContainer: {
    // width: "90%",
    margin: "auto",
    padding: "0.5rem",
  },

  navBar: {
    height: "70px",
    [theme.breakpoints.up("sm")]: {
      height: "30px",
    },
    paddingTop: "30px",
    paddingBottom: "90px",
  },

  navMenuList: {
    listStyleType: "none",
    padding: "0px",
  },

  navMenuItem: {
    display: "flex",
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.up("xs")]: {
      float: "right",
    },
  },

  navImageItem: {
    position: "relative",
    alignItems: "left",
  },

  navImage: {
    width: "400px",
    float: "left",
    position: "absolute",
    left: "-37px",
  },

  navAboutButton: {
    fontSize: "20px",
    fontWeight: "600",
    transformText: "uppercase",
    color: theme.palette.primary.contrastText,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const universalClasses = universalStyles();
  const theme = useTheme();

  const smallScreen = useMediaQuery(theme.breakpoints.down(800));
  // console.log(smallScreen)
  return (
    <div className={universalClasses.container}>
      <div className={classes.navContainer}>
        <div className={classes.navBar}>
          <ul className={classes.navMenuList}>
            <li key={"homeButton"} className={classes.navImageItem}>
              <div className={classes.navImage}>
                <Link to="/">
                  <img
                    src={logo}
                    alt={"schmiede.ONE Logo"}
                    className={classes.navImage}
                  />
                </Link>
              </div>
            </li>
            {smallScreen ? (
              <li className={classes.navMenuItem}>
                <MobileMenu />
              </li>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
