import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  introContainer: {
    padding: "50px 0.5rem",
    // display: "flex",
    // margin: "auto",
    width: "100%",
    // position: "relative",
  },

  intro: {
    // width: "50%",
    // paddingBottom: "50px",
    // display: "block",
  },

  introTitle: {},

  introText: {
    paddingRight: "0.5rem",
  },

  introImageContainer: {
    position: "absolute",
    // padding: "0.5rem",
    width: "100%",
    height: "100%",
    top: "0",
    // width: "80rem",
    // height: "22rem",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  introImage: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    float: "left",
    // left:"0px",
  },

  introImagePositionContainer: {
    width:"20rem",
    position: "relative",
    paddingTop: "80%",
  },
}));

const Intro = ({ title, description, image }) => {
  console.log(image[0].url);
  const classes = useStyles();
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? image[0].url
      : process.env.REACT_APP_BACKEND_URL + image[0].url;

  return (
    <div className={classes.introContainer}>
      <div className={classes.intro}>
        <h1 className={classes.introTitle}>{title}</h1>
        <p className={classes.introText}>{description}</p>
      </div>
      <div style={{width:"20rem"}}>
      <div className={classes.introImagePositionContainer}>
        {/* <div className={classes.cardPositionContainer}> */}
          {/* <div className={classes.cardLink}> */}
            <div className={classes.introImageContainer}>
              <div
                className={classes.introImage}
                style={{
                  backgroundImage: `url(${imageUrl})`,
                  backgroundPosition: `center`,
                }}
              />
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Intro;
