import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import universalStyles from "../../utils/universalStyles";

const imageBreakPoint = 800;

const useStyles = makeStyles((theme) => ({
  intro: {
    padding: "50px 0.5rem",
    display: "flex",
    width: "100%",
    color: theme.palette.primary.contrastText,
  },

  introText: {
    width: "70%",
    [theme.breakpoints.down(imageBreakPoint)]: {
      width: "100%",
    },
    color: theme.palette.primary.contrastText,
  },

  introTitle: {
    fontSize: "5rem",
    [theme.breakpoints.down(imageBreakPoint)]: {
      fontSize: "3rem",
    },
  },

  introDescription: {
    paddingTop: "1rem",
    fontSize: "20px",
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
  const universalClasses = universalStyles();
  const classes = useStyles();
  const imageUrl = !!image
    ? process.env.REACT_APP_BACKEND_URL + image[0].url
    : "";

  return (
    <div className={universalClasses.container}>
      <div aria-label="intro" className={classes.intro}>
        <div className={classes.introText}>
          <h1 className={classes.introTitle}>{title}</h1>
          <p className={classes.introDescription}>{description}</p>
        </div>
        {imageUrl ? (
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
        ) : (<div/>)

        }
        
      </div>
    </div>
  );
};

export default Intro;
