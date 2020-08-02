import React from "react";
// import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
// import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
    // flexGrow: 1,
    background: "linear-gradient(to bottom,  #959595 0%,#0d0d0d 46%,#010101 50%,#0a0a0a 53%,#4e4e4e 76%,#383838 87%,#1b1b1b 100%)", /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    color: "white",
    height: "50px",
    width: "100%",
    padding: "5px",
    marginTop: "35px",
    fontSize: "10px",
    position: "fixed",
    bottom: "0",
        textAlign: "center",
    alignContent: "flex-start",
  },
  icon: {
    color: "white",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.root}>
        <Typography variant="subtitle1" >
          Morgan Splawn
          <IconButton
            className={classes.icon}
            aria-label="email"
            href="mailto:mmsplawn@gmail.com"
            target="_blank"
          >
            <MailOutlineIcon />
          </IconButton>
          <IconButton
            className={classes.icon}
            aria-label="github"
            href="https://github.com/msplawn"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            className={classes.icon}
            aria-label="linkedin"
            href="https://www.linkedin.com/in/morgan-splawn/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
        </Typography>
      </Box>
    </div>
  );
}
