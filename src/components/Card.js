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
    position: "absolute",
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

  backgroundImage: {
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    height: "100%",
  },

  cardTitle: {
    textAlign: "center",
    fontSize: "1rem",
    margin: "auto",
    color: "white",
  },

  cardCategoryContainer: {
    display: "flex",
    backgroundColor: "#df1720CC",
    boxSizing: "border-box",
    position: "absolute",
    zIndex: "10",
    right: "20px",
    top: "20px",
  },

  cardCategory: {
    fontSize: "0.8rem",
    textTransform: "uppercase",
    margin: "auto",
    color: "white",
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
          className={classes.backgroundImage}
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
