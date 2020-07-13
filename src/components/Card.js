import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
  },

  card: {
    padding: "0.5rem",
  },

  cardImageBox: {
    width: "100%",
    margin: "auto",
  },
  
  cardImage: {
    width: "100%",
    paddingTop: "60%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "Relative",
  },
  cardText: {
    padding: "1.5rem",
    textAlign: "center",
  },
  cardTitle: {
    fontSize:"1.5rem",
  },

  cardCategory: {
    fontSize:"0.8rem",
    padding: "0.5rem",
    textTransform:"uppercase",
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
          <div className={classes.cardImageBox}>
            <div
              className={classes.cardImage}
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: `center`,
              }}
            />
          </div>
          <div className={classes.cardText}>
            <p id="title" className={classes.cardTitle}>{article.title}</p>
            
            <p id="category" className={classes.cardCategory}>{article.category.name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
