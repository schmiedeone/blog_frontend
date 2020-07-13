import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";

import Query from "./Query";

import CATEGORIES_QUERY from "../queries/category/categories";
import universalStyles from "../utils/universalStyles";

const useStyles = makeStyles((theme) => ({
  navBar: {
    width: "80%",
    margin: "auto",
    height: "30px",
    padding: "30px 0 30px 0",
  },

  navMenuList: {
    padding: "0",
    listStyleType: "none",
  },

  navMenuItem: {
    textDecoration: "none",
    display: "block",
    float:"left",
  },
  
  navHomeButton: {
    float:"left",
    fontWeight: "600",
    fontSize: "1.5rem",
  },
  
  navCategoryButton: {
    textTransform:"uppercase",
    float:"right",
    paddingLeft: "16px",
  },
  
}));

const Nav = ({ name }) => {
  const classes = useStyles();
  const universalClasses = universalStyles();
  return (
    <div className={universalClasses.container}>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <div className={classes.navBar}>
              <ul className={classes.navMenuList}>
                <li key={"homeButton"} className={classes.navHomeButton}>
                  <Link to="/" className={classes.navMenuItem}>{name}</Link>
                </li>
                {categories.map((category, i) => {
                  return (
                    <li key={category.id} className={classes.navCategoryButton}>
                      <Link to={`/category/${category.id}`} className={classes.navMenuItem}>
                        {category.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }}
      </Query>
    </div>
  );
};
export default Nav;
