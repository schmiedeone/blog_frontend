import { Button, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Query from "../Query";

const useStyles = makeStyles((theme) => ({
  dropMenu: {
    width: "100%",
    display: "block",
    "& > div": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  dropMenuTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: theme.palette.primary.contrastText,
  },
  dropMenuItem: {
    transformText: "uppercase",
    fontSize: "14px",
    fontWeight: "400",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
}));

const DropMenu = ({ query, queryName, extension }) => {
  const classes = useStyles();

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
        aria-controls={queryName}
        aria-haspopup="false"
        onClick={handleClick}
        className={classes.dropMenuTitle}
      >
        {queryName}
      </Button>
      <Menu
        id={queryName}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.dropMenu}
      >
        <MenuItem key={queryName} onClick={handleClose}>
          <Link to={`/${queryName}`} className={classes.dropMenuItem}>
            {`All ${queryName}`}
          </Link>
        </MenuItem>
        <Query query={query} id={null}>
          {({ data }) => {
            return data[queryName].map((element, i) => {
              return (
                <MenuItem key={element.id} onClick={handleClose}>
                  <Link
                    to={`/${extension}/${element.id}`}
                    className={classes.dropMenuItem}
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