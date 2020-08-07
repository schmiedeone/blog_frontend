import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Textfit } from "react-textfit";

import universalStyles from "../../utils/universalStyles";

const imageBreakPoint = 800;

const useStyles = makeStyles((theme) => ({
  intro: {
    padding: "10px 0.5rem",
    display: "flex",
    width: "100%",
    color: theme.palette.primary.contrastText,
  },

  introTextContainer: {
    width: "70%",
    [theme.breakpoints.down(imageBreakPoint)]: {
      width: "100%",
    },
    color: theme.palette.primary.contrastText,
    height: "100%"
  },

  introText: {
    height: "200px",
    [theme.breakpoints.up("sm")]: {
      height: "20vw",
    },
    [theme.breakpoints.up(1280)]: {
      height: "200px",
    },
    paddding: "1rem",
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
    ? image[0].url
    : "";

  return (
    <div className={universalClasses.container}>
      <div aria-label="intro" className={classes.intro}>
        <div className={classes.introTextContainer}>
          <Textfit mode="multi" className={classes.introText} >
            <h1>{title}</h1>
          </Textfit>
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
        ) : (<div />)
        }
      </div>
    </div>
  );
};

export default Intro;
