import { makeStyles } from "@material-ui/core/styles";

const universalStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    [theme.breakpoints.down(400)]: {
      width: "400px",
    },
    [theme.breakpoints.up(1280)]: {
      width: "1280px",
    },
    margin: "auto",
  },

  backgroundImage: {
    width: "100%",
    paddingTop: "60%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "Relative",
  }
}));

export default universalStyles;