import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import universalStyles from "../../utils/universalStyles";

const useStyles = makeStyles((theme) => ({
  footer: {
    fontSize: "15px",
    padding: "1rem 0",
    margin: "auto",
    width: "90%",
    display: "flex",
    [theme.breakpoints.down(800)]: {
      flexDirection: "column",
    },
    boxShadow: `50vw 0 0 100vw ${theme.palette.primary.main}`,
  },

  footerLinks: {
    margin: "auto",
    [theme.breakpoints.down(800)]: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
    },
  },

  footerElement: {
    margin: "auto",
    padding: "0.75rem",
  },
}));

const Footer = ({ footerText }) => {
  const { imprint, about, trademark, dataProtection } = footerText;
  const classes = useStyles();
  const universalClasses = universalStyles();

  return (
    <div className={universalClasses.container}>
      <div>
        <div className={classes.footer}>
          <div className={classes.footerLinks}>
            <a
              href={"https://schmiede.one/about/"}
              className={classes.footerElement}
            >
              {about}
            </a>
            <a
              href={"https://schmiede.one/imprint/"}
              className={classes.footerElement}
            >
              {imprint}
            </a>
            <a
              href={"https://schmiede.one/privacy-policy/"}
              className={classes.footerElement}
            >
              {dataProtection}
            </a>
          </div>
          <div className={classes.footerElement}>{trademark}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
