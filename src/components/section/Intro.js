import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const imageBreakPoint = 800;

const useStyles = makeStyles((theme) => ({
  intro: {
    padding: "50px 0.5rem",
    display: "flex",
    width: "100%",
  },

  introText: {
    width: "70%",
    [theme.breakpoints.down(imageBreakPoint)]: {
      width: "100%",
    },
  },

  introTitle: {},

  introDescription: {
    paddingRight: "0.5rem",
  },

  introImageSizeContainer: {
    width: "30%",
    [theme.breakpoints.down(imageBreakPoint)]: {
      display: "none",
    },
  },

  introImagePositionContainer: {
    position: "relative",
    paddingTop: "100%",
  },

  introImage: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
  },
}));

const Intro = ({ title, description, image }) => {
  // console.log(image[0].url);
  const classes = useStyles();
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? image[0].url
      : process.env.REACT_APP_BACKEND_URL + image[0].url;

  return (
    <div aria-label="intro" className={classes.intro}>
      <div className={classes.introText}>
        <h1 className={classes.introTitle}>{title}</h1>
        <p className={classes.introDescription}>{description}</p>
      </div>
      <div className={classes.introImageSizeContainer}>
        <div className={classes.introImagePositionContainer}>
          <div
            className={classes.introImage}
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
