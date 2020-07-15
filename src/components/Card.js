import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  card: {
    "& a": {
      color:"white",
    },
    display: "block",
    position: "relative",
    paddingTop: "60%",
  },

  cardPositionContainer: {
    position: "absolute",
    padding: "0.5rem",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
  },

  cardLink: {
    display: "block",
    position: "relative",
    height: "100%",
    width: "100%",
  },

  cardImage: {
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    "&::after": {
      content: '""',
      position: "absolute",
    },
  },

  cardCorner: {
    "&::after": {
      right: 0,
      borderRight: "0px solid transparent",
      
      borderLeft: `180px solid transparent`,
      borderTop: `80px solid #df1720CC`,
      [theme.breakpoints.down("sm")]: {
        borderLeft: `18vw solid transparent`,
        borderTop: `8vw solid #df1720CC`,
      },
      [theme.breakpoints.down("xs")]: {
        borderLeft: `32.4vw solid transparent`,
        borderTop: `14.4vw solid #df1720CC`,
      },
      [theme.breakpoints.down(400)]: {
        borderLeft: `130px solid transparent`,
        borderTop: `57.5px solid #df1720CC`,
      },
    },
  },

  cardTitleContainer: {
    display: "flex",
    backgroundColor: "#df1720CC",
    boxSizing: "border-box",
    position: "absolute",
    bottom: "0",
    width: "100%",
    padding: "0.5rem",
  },

  cardTitle: {
    textAlign: "center",
    margin: "auto",
    color: "white",
    fontSize: "1.25rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "5vw",
    },
    [theme.breakpoints.down(400)]: {
      fontSize: "20px",
    },
  },

  cardCategoryContainer: {
    // display: "flex",
    position: "absolute",
    zIndex: "10",

    right: "11px",//"15px",
    top: "31px",//"35px",
    [theme.breakpoints.down("sm")]: {
      right: "1vw",//"11px",
      top: "3.5vw",//"30px",
    },
    [theme.breakpoints.down("xs")]: {
      right: "3vw",//"11px",
      top: "7vw",//"30px",
    },
    [theme.breakpoints.down(400)]: {
      right: "12px",//"11px",
      top: "28px",//"30px",
    },
  },

  cardCategory: {
    textTransform: "uppercase",
    margin: "auto",
    color: "white",
    transform: "rotate(24deg)",

    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5vw",
    },
    [theme.breakpoints.down(400)]: {
      fontSize: "6px",
    },
  },
}));

const Card = ({ article }) => {
  const classes = useStyles();
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.image[0].url
      : process.env.REACT_APP_BACKEND_URL + article.image[0].url;

  const CategoryLink = () => (
    <div className={classes.cardCategoryContainer}>
      <p id="category" className={classes.cardCategory}>
        <Link to={`/category/${article.category.id}`}>
          {article.category.name}
        </Link>
      </p>
    </div>
  );

  return (
    <div aria-label="card" className={classes.card}>
      <div className={classes.cardPositionContainer}>

      {!!article.category ? <CategoryLink /> : ""}

      <Link className={classes.cardLink} to={`/article/${article.id}`}>
        <div
          className={`${classes.cardImage} ${classes.cardCorner}`}
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: `center`,
          }}
          >
        </div>
          <div className={classes.cardTitleContainer}>
            <p id="title" className={classes.cardTitle}>
              {article.title}
            </p>
          </div>
      </Link>
          </div>
    </div>
  );
};

export default Card;
