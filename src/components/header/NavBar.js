import { Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
import { Link } from "react-router-dom";

import DropMenu from "./DropMenu";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo.js";

import CATEGORIES_QUERY from "../../queries/category/categories";
import AUTHORS_QUERY from "../../queries/author/authors";
import universalStyles from "../../utils/universalStyles";

const useStyles = makeStyles((theme) => ({
  navContainer: {
    margin: "auto",
    padding: "0.5rem",
  },

  navBar: {
    height: "70px",
    [theme.breakpoints.up("sm")]: {
      height: "30px",
    },
    paddingTop: "30px",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0px",
    },
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
    float: "left",
    position: "absolute",
    left: "0",
  },

  navAboutButton: {
    fontSize: "25px",
    fontWeight: "400",
    color: theme.palette.primary.contrastText,
    textTransform: "lowercase",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const universalClasses = universalStyles();
  const theme = useTheme();

  const smallScreen = useMediaQuery(theme.breakpoints.down(800));
  return (
    <div className={universalClasses.container}>
      <div className={classes.navContainer}>
        <div className={classes.navBar}>
          <ul className={classes.navMenuList}>
            <li key={"homeButton"} className={classes.navImageItem}>
              <div className={classes.navImage}>
                <Link to="/">
                  <Logo colour={theme.palette.primary.contrastText}/>
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
                    <Link to="/about" className={classes.navAboutButton} id="aboutButton">
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
