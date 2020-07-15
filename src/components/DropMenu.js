import { Button, Menu, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Query from "./Query";

const DropMenu = ( { query, queryName, extension } ) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {queryName}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          <Query query={query} id={null}>
            {({ data }) => {
              return data[queryName].map((element, i) => {
                return (
                  <MenuItem key={element.id} onClick={handleClose}>
                    <Link
                      to={`/${extension}/${element.id}`}
                    >
                      {element.name}
                    </Link>
                  </MenuItem>
                );
              });
            }}
          </Query>
      </Menu>
    </div>
  );
};

export default DropMenu;

