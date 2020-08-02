import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter } from "react-router";

const useStyles = makeStyles({
  root: {
    // flexGrow: 1,
    padding: "40px",
    marginBottom: "20px",
    background: "linear-gradient(to bottom,  #959595 0%,#0d0d0d 46%,#010101 50%,#0a0a0a 53%,#4e4e4e 76%,#383838 87%,#1b1b1b 100%)", /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    color: "white",
    fontFamily: "Arial"

  },
  tabs: {
    backgroundColor: "#33c9dc",
    color: "white",
    padding: "50px"
  },
});

function NavTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    props.history.push(
      value === 0 ? "/" : value === 1 ? "/portfolio" : "/about"
    );
  }, [value]);

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="black"
        centered
      >
        <Tab label="Home" />
        <Tab label="Portfolio"  />
        <Tab label="About / Contact"  />
      </Tabs>
    </Paper>
  );
}

export default withRouter(NavTabs);