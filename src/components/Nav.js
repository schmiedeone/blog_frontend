import React from "react";
import { Link } from "react-router-dom";

import Query from "./Query";

import CATEGORIES_QUERY from "../queries/category/categories";

const Nav = ({ name }) => {
  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <div>
              {/* <nav className="uk-navbar-container" data-uk-navbar> */}
                <div>
                  <div>
                    <Link to="/">
                      {name}
                    </Link>
                  </div>
                  <div >
                    <ul >
                      {categories.map((category, i) => {
                        return (
                          <li key={category.id}>
                            <Link
                              to={`/category/${category.id}`}
                            >
                              {category.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              {/* </nav> */}
            </div>
          );
        }}
      </Query>
    </div>
  );
};
export default Nav;
