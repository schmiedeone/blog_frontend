import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";

import universalStyles from "../utils/universalStyles";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: "0.5rem",
    display: "block",
  },
  
  cardImage: {
    width: "100%",
    paddingTop: "60%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "Relative",
  },

  cardTitle: {
    padding: "0.7rem",
    textAlign: "center",
    fontSize: "1.5rem",
  },

  cardCategoryContainer: {
    display: "flex",
    paddingBottom: "0.7rem",
  },

  cardCategory: {
    fontSize: "0.8rem",
    textTransform: "uppercase",
    margin: "auto",
  },
}));

const Card = ({ article }) => {
  const classes = useStyles();
  const universalClasses = universalStyles();
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
      <Link to={`/article/${article.id}`}>
        <div>
            <div
              className={universalClasses.backgroundImage}
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: `center`,
              }}
            />
            <p id="title" className={classes.cardTitle}>
              {article.title}
            </p>
        </div>
      </Link>
      {!!article.category ? <CategoryLink /> : ""}
    </div>
  );
};

export default Card;
