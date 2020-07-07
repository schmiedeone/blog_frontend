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
    // display: "flex",
  },

  cardImageBox: {
    width: "100%",
    margin: "auto",
  },
  
  cardImage: {
    width: "100%",
    paddingTop: "60%",
    backgroundSize: "cover",
    // height: "15rem",
    backgroundRepeat: "no-repeat",
    position: "Relative",
  },
  cardText: {
    padding: "1.5rem",
    textAlign: "center",
    // width: "40%",
    // float: "right",
    // padding: "1rem",
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
          {/* <div>
            <img src={imageUrl} alt={article.image.url} height="100px" />
          </div> */}
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
