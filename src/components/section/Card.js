import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    "& a": {
      color: "white",
    },
    position: "relative",
    paddingTop: "80%",
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
  },

  cardImage: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    "&::after": {
      content: '""',
      position: "absolute",
    },
  },


  cardDetailContainer: {
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main,
    position: "absolute",
    bottom: "0",
    width: "100%",
  },

  cardDetailElement: {
    margin: "0.5rem",
    textAlign: "left",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },

  cardTitle: {
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

  cardAuthor: {
    marginTop: "0rem",
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "4vw",
    },
    [theme.breakpoints.down(400)]: {
      fontSize: "15px",
    },
    textIndent: "0px",
  },

  cardCategoryContainer: {
    position: "absolute",
    zIndex: "10",
    right: "0.5rem",
    top: "0.5rem",
  },

  cardCategory: {
    textTransform: "uppercase",
    padding: "0.25rem",
    color: "white",
    backgroundColor: "#df1720",
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5vw",
    },
    [theme.breakpoints.down(400)]: {
      fontSize: "8px",
    },
  },
}));

const Card = ({ content }) => {
  const classes = useStyles();
  const imageUrl = !!content.image
    ? process.env.NODE_ENV !== "development"
      ? content.image[0].url
      : process.env.REACT_APP_BACKEND_URL + content.image[0].url
    : "";

  const CategoryLink = () => (
    <div className={classes.cardCategoryContainer}>
      <p id="category" className={classes.cardCategory}>
        <Link to={`/category/${content.category.id}`}>
          {content.category.name}
        </Link>
      </p>
    </div>
  );
  return (
    <div aria-label="card" className={classes.card}>
      <div className={classes.cardPositionContainer}>
        {!!content.category ? <CategoryLink /> : ""}

        <Link
          className={classes.cardLink}
          to={`/${content.__typename}/${content.id}`}
        >
          <div
            className={
              !!content.category
                ? `${classes.cardImage} ${classes.cardCorner}`
                : classes.cardImage
            }
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundPosition: `center`,
            }}
          />
          <div className={classes.cardDetailContainer}>
            <div className={classes.cardDetailElement}>
              <p id="title" className={classes.cardTitle}>
                {!!content.title ? content.title : content.name}
              </p>
            </div>

            <div className={classes.cardDetailElement}>
              <p id="author" className={classes.cardAuthor}>
                {!!content.author ? content.author.name : ""}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
