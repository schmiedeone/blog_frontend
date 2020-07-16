import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  intro: {
    paddingTop: "50px",
    width: "95%",
    margin: "auto",
    paddingBottom: "50px",
    // display: "block",
  },

  introTitle: {
    // width: "49.95%",
    // [theme.breakpoints.down("sm")]: {
    //   width: "50%",
    // },
    // [theme.breakpoints.down("xs")]: {
    //   width: "100%",
    // },
    // float: "left",
  },

  introText: {
    // width: "25%",
    // [theme.breakpoints.down("sm")]: {
    //   width: "50%",
    // },
    // float: "left",
  },
}));

const Intro = ({ title, description }) => {
  const classes = useStyles();

  return (
    <div className={classes.intro}>
      <h1 className={classes.introTitle}>{title}</h1>
      <p className={classes.introText}>{description}</p>
    </div>
  );
};

export default Intro;
