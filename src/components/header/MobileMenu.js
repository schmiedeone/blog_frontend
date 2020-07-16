import { Button, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    fontSize: "20px",
    fontWeight: "400",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
}));

const MobileMenu = () => {
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
        aria-controls={"Mobile Menu"}
        aria-haspopup="false"
        onClick={handleClick}
        className={classes.dropMenuTitle}
      >
        <MenuIcon />
      </Button>
      <Menu
        id={"Mobile Menu"}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.dropMenu}
      >
        <MenuItem key={"about"} onClick={handleClose}>
          <Link to={"/about"} className={classes.dropMenuItem}>
            {"About"}
          </Link>
        </MenuItem>
        <MenuItem key={"authors"} onClick={handleClose}>
          <Link to={"/authors"} className={classes.dropMenuItem}>
            {"Authors"}
          </Link>
        </MenuItem>
        <MenuItem key={"categories"} onClick={handleClose}>
          <Link to={"/categories"} className={classes.dropMenuItem}>
            {"Categories"}
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MobileMenu;
