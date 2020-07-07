import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    // width: "100%",
  },

  card: {
    // width: "100%",
    // margin: "auto",
  },

  cardImage: {
    width: "100%",
    height: "70%",
    // padding: "1rem",
  },

  cardText: {
    // width: "40%",
    // float: "right",
    // padding: "1rem",
  },
}));

const Card = ({ article }) => {
  const classes = useStyles();
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.image[0].url
      : process.env.REACT_APP_BACKEND_URL + article.image[0].url;
  return (
    <div aria-label="card" className={classes.card}>
      <Link to={`/article/${article.id}`}>
        <div>
          <div>
            <img src={imageUrl} alt={article.image.url} height="100px" />
          </div>
          <div>
            <p id="category">{article.category.name}</p>
            <p id="title">{article.title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
