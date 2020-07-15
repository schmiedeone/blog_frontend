import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";

import Query from "./Query";

import CATEGORIES_QUERY from "../queries/category/categories";
import AUTHORS_QUERY from "../queries/author/authors";
import universalStyles from "../utils/universalStyles";

import logo from "../img/schmiedeOneLogo.svg";

const useStyles = makeStyles((theme) => ({
  navBar: {
    width: "80%",
    height: "30px",
    margin: "30px 0 30px 0",
  },

  navMenuList: {
    listStyleType: "none",
  },

  navMenuItem: {
    textDecoration: "none",
    display: "block",
    float: "left",
  },

  navHomeButton: {
    float: "left",
  },

  navLogo: {
    height: "100%",
  },

  navCategoryButton: {
    textTransform: "uppercase",
    float: "right",
    paddingLeft: "16px",
    display: "flex",
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
            <Link to="/" className={classes.navMenuItem}>
              <img
                src={logo}
                alt={"Schmiede.ONE Logo"}
                className={classes.navLogo}
              />
            </Link>
          </li>
          <Query query={CATEGORIES_QUERY} id={null}>
            {({ data: { categories } }) => {
              return categories.map((category, i) => {
                return (
                  <li key={category.id} className={classes.navCategoryButton}>
                    <Link
                      to={`/category/${category.id}`}
                      className={classes.navMenuItem}
                    >
                      {category.name}
                    </Link>
                  </li>
                );
              });
            }}
          </Query>
          <Query query={AUTHORS_QUERY} id={null}>
            {({ data: { authors } }) => {
              return authors.map((author, i) => {
                return (
                  <li key={author.id} className={classes.navCategoryButton}>
                    <Link
                      to={`/author/${author.id}`}
                      className={classes.navMenuItem}
                    >
                      {author.name}
                    </Link>
                  </li>
                );
              });
            }}
          </Query>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
